Widget subclass: #Todo
	instanceVariableNames: 'isDone text id onTodoChanged onDeleteClicked'
	category: 'TodoList'!

!Todo methodsFor: 'accessing'!

isDone
	^ isDone
!

isDone: aBool
	isDone := aBool.
!

text
	^ text
!

text: anObject
	text := anObject
!

toggleIsDone
	self isDone: isDone not
!

id
	^ id
!

id: aString
	id := aString
!

onTodoChangedDo: aBlock
	onTodoChanged := aBlock
!

onDeleteClickedDo: aBlock
	onDeleteClicked := aBlock
! !

!Todo methodsFor: 'initializing'!

initialize
	super initialize.
	isDone := false.
! !

!Todo methodsFor: 'rendering'!

renderOn: html
	| input delete |
	html li
		id: self id;
		with: [
                  input := html input
                  	type: 'checkbox';
                  	onClick: [
                          self toggleIsDone.
                          onTodoChanged value: self. 
                          (input asJQuery next) toggleClass: 'done' ].
		html span with: text .
                delete := html span
                  with: '  [x]';
                  onClick: [ onDeleteClicked value: self ]].
	isDone ifTrue: [ 
          input at: 'checked' put: 'checked'.
          (input asJQuery next) addClass: 'done'].
! !

!Todo methodsFor: 'testing'!

= aTodo
	^ self id = aTodo id
! !

!Todo class methodsFor: 'not yet classified'!

fromDictionary: aDict
	| todo |
	todo := self new.
	todo id: (aDict at: 'id').
	todo text: (aDict at: 'text').
	todo isDone: (aDict at: 'isDone').
	^ todo
!

newWithText: aString
	^ self new text: aString
!

fromDictionary: aDict withCallback: aBlock
	| todo |
	todo := self fromDictionary: aDict.
	todo onTodoChangedDo: aBlock.
	^ todo
!

fromDictionary: aDict withTodoChangedCallback: aBlock withDeleteClickedCallback: oBlock
	| todo |
	todo := self fromDictionary: aDict.
	todo onTodoChangedDo: aBlock.
	todo onDeleteClickedDo: oBlock.
	^ todo
! !

Widget subclass: #TodoList
	instanceVariableNames: 'todos container count'
	category: 'TodoList'!

!TodoList methodsFor: 'adding/removing'!

addTodo: aTodo
	aTodo id: count asString.
	aTodo onTodoChangedDo: [ :todo | todos at: (todos indexOf: todo) put: todo ].
	aTodo onDeleteClickedDo: [ :todo | self removeTodo: todo ].
       	todos add: aTodo.
       	aTodo appendToJQuery: container asJQuery.
	count := count + 1
!

removeTodo: aTodo
	todos remove: aTodo.
	('li#', aTodo id) asJQuery remove
! !

!TodoList methodsFor: 'events'!

handleInput: anEvent
	| text todo |
        text := anEvent target value.
        todo := Todo newWithText: text.
 	self addTodo: todo
! !

!TodoList methodsFor: 'initializing'!

initialize
	super initialize.
	todos := TodoStorage new.
	container := 'div#todos ol'.
	count := todos size = 0 ifTrue: [ 1 ] ifFalse: [( todos collect: [ :each | each id asNumber ]) sort last + 1 ]
! !

!TodoList methodsFor: 'rendering'!

renderOn: html
	html div
		id: 'application';
		with: [
                  self renderHeaderOn: html.
                  self renderBodyOn: html.
                  self renderFooterOn: html. ]
!

renderBodyOn: html
	html div
		id: 'body';
		class: 'section';
		with: [
                  self renderFormOn: html.
                  self renderTodosOn: html ]
!

renderFooterOn: html
	html div
		id: 'footer';
		class: 'section';
		with: [ html p with: 'Example Todo application for Amber Smalltalk by rbistolfi' ]
!

renderFormOn: html
	| input defaultText |
	defaultText := 'What needs to be done?'.
	html div
		id: 'form';
		with: [
                   input := html input
                  	type: 'text';
                  	onKeyUp: [ :event |
                                  (event keyCode = 13) ifTrue: [
                                    self handleInput: event.
                                    input asJQuery val: '' ] ] ].
	input element placeholder: defaultText.
!

renderHeaderOn: html
	html div
		id: 'header';
		class: 'section';
		with: [ html h1 with: 'Todos' ]
!

renderTodosOn: html
	html div
		id: 'todos';
		with: [
                  html ol
                  	with: [ todos do: [ :aTodo | 
                                           aTodo onTodoChangedDo: [ :todo | todos at: (todos indexOf: todo) put: todo ].
	                                   aTodo onDeleteClickedDo: [ :todo | self removeTodo: todo ].
                                           aTodo renderOn: html ]]]
! !

!TodoList class methodsFor: 'not yet classified'!

run
	self new appendToJQuery: 'body' asJQuery
! !

Object subclass: #TodoStorage
	instanceVariableNames: 'storage array'
	category: 'TodoList'!

!TodoStorage methodsFor: 'accessing'!

at: anIndex
	^ array at: anIndex
!

at: anIndex put: anObject
	array at: anIndex put: anObject.
	self save
!

getArray
	| anArray aJSONArray |
	aJSONArray := storage getItem: 'TodoList'.
	anArray := aJSONArray ifNil: [ self initializeStorage ] ifNotNil: [ smalltalk readJSON: (JSON parse: aJSONArray) ].
	^ anArray collect: [ :each | Todo fromDictionary: each ]
!

setArray
	^ self save
!

lenght
	^ self size
!

size
	^ array size
!

indexOf: anObject
	^ array indexOf: anObject
! !

!TodoStorage methodsFor: 'adding/removing'!

add: anObject
	array add: anObject.
	self save.
!

remove: anObject
	| d |
	d := array detect: [ :each | each asJSON = anObject asJSON ]. 
	array remove: d.
	self save
! !

!TodoStorage methodsFor: 'initializing'!

initialize
	storage := localStorage.
	array := self getArray.
!

initializeStorage
	| anArray |
	anArray := Array new.
	storage setItem: 'TodoList' value: anArray asJSON.
	^ anArray
! !

!TodoStorage methodsFor: 'iterating'!

do: aBlock
	array do: aBlock.
	self save.
!

collect: aBlock
	^ array collect: aBlock
!

select: aBlock
	^ array select: aBlock
!

detect: aBlock
	^ array detect: aBlock
! !

!TodoStorage methodsFor: 'persistence'!

save
	storage setItem: 'TodoList' value: array asJSON
! !

