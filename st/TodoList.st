Widget subclass: #TodoList
	instanceVariableNames: 'todos container'
	category: 'TodoList'!

!TodoList methodsFor: 'not yet classified'!

renderOn: html
	html div
		id: 'application';
		with: [
                  self renderHeaderOn: html.
                  self renderBodyOn: html.
                  self renderFooterOn: html. ]
!

renderHeaderOn: html
	html div
		id: 'header';
		class: 'section';
		with: [ html h1 with: 'Todos' ]
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

renderTodosOn: html
	html div
		id: 'todos';
		with: [
                  html ol
                  	with: [ todos do: [ :todo | (Todo fromDictionary: todo) renderOn: html ]]]
!

handleInput: anEvent
	| text todo html |
        text := anEvent target value.
        todo := Todo newWithText: text.
        todos add: todo.
        html := HTMLCanvas new.
        todo renderOn: html.
        container asJQuery append: html.
!

initialize
	super initialize.
	todos := TodoStorage new.
	container := 'div#todos ol'
! !

!TodoList class methodsFor: 'not yet classified'!

run
	'body' asJQuery append: self new.
! !

Widget subclass: #Todo
	instanceVariableNames: 'id text isDone'
	category: 'TodoList'!

!Todo methodsFor: 'not yet classified'!

initialize
	super initialize.
	isDone := false.
!

renderOn: html
	| input |
	html li
		with: [
                  input := html input
                  	type: 'checkbox';
                  	onChange: [
                          isDone := isDone not.
                          (input asJQuery call: 'next') toggleClass: 'done' ].
		html span with: text ]
!

text: aString
	text := aString
!

id: anObject
	id := anObject
!

isDone: anObject
	isDone := anObject
! !

!Todo class methodsFor: 'not yet classified'!

newWithText: aString
	^ self new text: aString
!

fromDictionary: aDict
	| todo |
	todo := self new.
	todo id: (aDict at: 'id').
	todo text: (aDict at: 'text').
	todo isDone: (aDict at: 'isDone').
	^ todo
! !

Object subclass: #TodoStorage
	instanceVariableNames: 'storage array'
	category: 'TodoList'!

!TodoStorage methodsFor: 'not yet classified'!

initialize
	storage := localStorage.
	array := self getArray
!

initializeStorage
	| anArray |
	anArray := Array new.
	storage setItem: 'TodoList' value: anArray asJSON.
	^ anArray
!

add: anObject
	array add: anObject.
	self save.
!

at: anIndex
	^ array at: anIndex
!

at: anIndex put: anObject
	array at: anIndex put. anObject.
	self save
!

save
	storage setItem: 'TodoList' value: array asJSON
!

getArray
	| anArray aJSONArray |
	aJSONArray := storage getItem: 'TodoList'.
	anArray := aJSONArray ifNil: [ self initializeStorage ] ifNotNil: [ smalltalk readJSON: (JSON parse: aJSONArray) ].
	^ anArray
!

setArray
	^ self save
!

do: aBlock
	^ array do: aBlock
! !

