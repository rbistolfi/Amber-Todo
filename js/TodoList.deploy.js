smalltalk.addClass('Todo', smalltalk.Widget, ['observers', 'isDone', 'text', 'id', 'onTodoChanged'], 'TodoList');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@isDone']=false;
self['@observers']=smalltalk.send((smalltalk.Array || Array), "_new", []);
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
'_isDone',
smalltalk.method({
selector: 'isDone',
fn: function (){
var self=this;
return self['@isDone'];
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
'_isDone_',
smalltalk.method({
selector: 'isDone:',
fn: function (aBool){
var self=this;
self['@isDone']=aBool;
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
'_text',
smalltalk.method({
selector: 'text',
fn: function (){
var self=this;
return self['@text'];
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
'_text_',
smalltalk.method({
selector: 'text:',
fn: function (anObject){
var self=this;
self['@text']=anObject;
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
'_toggleIsDone',
smalltalk.method({
selector: 'toggleIsDone',
fn: function (){
var self=this;
smalltalk.send(self, "_isDone_", [smalltalk.send(self['@isDone'], "_not", [])]);
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
'_id',
smalltalk.method({
selector: 'id',
fn: function (){
var self=this;
return self['@id'];
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
'_id_',
smalltalk.method({
selector: 'id:',
fn: function (aString){
var self=this;
self['@id']=aString;
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
var input=nil;
(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [(function(){input=(function($rec){smalltalk.send($rec, "_type_", ["checkbox"]);return smalltalk.send($rec, "_onClick_", [(function(){smalltalk.send(self, "_toggleIsDone", []);smalltalk.send(self['@onTodoChanged'], "_value_", [self]);return smalltalk.send(smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_next", []), "_toggleClass_", ["done"]);})]);})(smalltalk.send(html, "_input", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [self['@text']]);})]);})(smalltalk.send(html, "_li", []));
((($receiver = self['@isDone']).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(input, "_at_put_", ["checked", "checked"]);return smalltalk.send(smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_next", []), "_addClass_", ["done"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(input, "_at_put_", ["checked", "checked"]);return smalltalk.send(smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_next", []), "_addClass_", ["done"]);})]));
return self;}
}),
smalltalk.Todo);

smalltalk.addMethod(
'_onTodoChangedDo_',
smalltalk.method({
selector: 'onTodoChangedDo:',
fn: function (aBlock){
var self=this;
self['@onTodoChanged']=aBlock;
return self;}
}),
smalltalk.Todo);


smalltalk.addMethod(
'_fromDictionary_',
smalltalk.method({
selector: 'fromDictionary:',
fn: function (aDict){
var self=this;
var todo=nil;
todo=smalltalk.send(self, "_new", []);
smalltalk.send(todo, "_id_", [smalltalk.send(aDict, "_at_", ["id"])]);
smalltalk.send(todo, "_text_", [smalltalk.send(aDict, "_at_", ["text"])]);
smalltalk.send(todo, "_isDone_", [smalltalk.send(aDict, "_at_", ["isDone"])]);
return todo;
return self;}
}),
smalltalk.Todo.klass);

smalltalk.addMethod(
'_newWithText_',
smalltalk.method({
selector: 'newWithText:',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_text_", [aString]);
return self;}
}),
smalltalk.Todo.klass);

smalltalk.addMethod(
'_fromDictionary_withCallback_',
smalltalk.method({
selector: 'fromDictionary:withCallback:',
fn: function (aDict, aBlock){
var self=this;
var todo=nil;
todo=smalltalk.send(self, "_fromDictionary_", [aDict]);
smalltalk.send(todo, "_onTodoChangedDo_", [aBlock]);
return todo;
return self;}
}),
smalltalk.Todo.klass);


smalltalk.addClass('TodoList', smalltalk.Widget, ['todos', 'container'], 'TodoList');
smalltalk.addMethod(
'_addTodo_',
smalltalk.method({
selector: 'addTodo:',
fn: function (aTodo){
var self=this;
smalltalk.send(aTodo, "_id_", [smalltalk.send(((($receiver = smalltalk.send(self['@todos'], "_lenght", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])), "_asString", [])]);
smalltalk.send(aTodo, "_onTodoChangedDo_", [(function(todo){return smalltalk.send(self['@todos'], "_at_put_", [smalltalk.send(smalltalk.send(todo, "_id", []), "_asNumber", []), todo]);})]);
smalltalk.send(self['@todos'], "_add_", [aTodo]);
smalltalk.send(aTodo, "_appendToJQuery_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
return self;}
}),
smalltalk.TodoList);

smalltalk.addMethod(
'_removeTodo_',
smalltalk.method({
selector: 'removeTodo:',
fn: function (aTodo){
var self=this;

return self;}
}),
smalltalk.TodoList);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["application"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderHeaderOn_", [html]);smalltalk.send(self, "_renderBodyOn_", [html]);return smalltalk.send(self, "_renderFooterOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TodoList);

smalltalk.addMethod(
'_handleInput_',
smalltalk.method({
selector: 'handleInput:',
fn: function (anEvent){
var self=this;
var text=nil;
var todo=nil;
var html=nil;
text=smalltalk.send(smalltalk.send(anEvent, "_target", []), "_value", []);
todo=smalltalk.send((smalltalk.Todo || Todo), "_newWithText_", [text]);
smalltalk.send(self, "_addTodo_", [todo]);
return self;}
}),
smalltalk.TodoList);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@todos']=smalltalk.send((smalltalk.TodoStorage || TodoStorage), "_new", []);
self['@container']=unescape("div%23todos%20ol");
return self;}
}),
smalltalk.TodoList);

smalltalk.addMethod(
'_renderBodyOn_',
smalltalk.method({
selector: 'renderBodyOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["body"]);smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderFormOn_", [html]);return smalltalk.send(self, "_renderTodosOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TodoList);

smalltalk.addMethod(
'_renderFooterOn_',
smalltalk.method({
selector: 'renderFooterOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["footer"]);smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", ["Example Todo application for Amber Smalltalk by rbistolfi"]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TodoList);

smalltalk.addMethod(
'_renderFormOn_',
smalltalk.method({
selector: 'renderFormOn:',
fn: function (html){
var self=this;
var input=nil;
var defaultText=nil;
defaultText=unescape("What%20needs%20to%20be%20done%3F");
(function($rec){smalltalk.send($rec, "_id_", ["form"]);return smalltalk.send($rec, "_with_", [(function(){return input=(function($rec){smalltalk.send($rec, "_type_", ["text"]);return smalltalk.send($rec, "_onKeyUp_", [(function(event){return ((($receiver = smalltalk.send(smalltalk.send(event, "_keyCode", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_handleInput_", [event]);return smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val_", [""]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_handleInput_", [event]);return smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val_", [""]);})]));})]);})(smalltalk.send(html, "_input", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(smalltalk.send(input, "_element", []), "_placeholder_", [defaultText]);
return self;}
}),
smalltalk.TodoList);

smalltalk.addMethod(
'_renderHeaderOn_',
smalltalk.method({
selector: 'renderHeaderOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["header"]);smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Todos"]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TodoList);

smalltalk.addMethod(
'_renderTodosOn_',
smalltalk.method({
selector: 'renderTodosOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["todos"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [(function(){return smalltalk.send(self['@todos'], "_do_", [(function(todo){return smalltalk.send(smalltalk.send((smalltalk.Todo || Todo), "_fromDictionary_withCallback_", [todo, (function(todo){return smalltalk.send(self['@todos'], "_at_put_", [smalltalk.send(smalltalk.send(todo, "_id", []), "_asNumber", []), todo]);})]), "_renderOn_", [html]);})]);})]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TodoList);


smalltalk.addMethod(
'_run',
smalltalk.method({
selector: 'run',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.TodoList.klass);


smalltalk.addClass('TodoStorage', smalltalk.Object, ['storage', 'array'], 'TodoList');
smalltalk.addMethod(
'_add_',
smalltalk.method({
selector: 'add:',
fn: function (anObject){
var self=this;
smalltalk.send(self['@array'], "_add_", [anObject]);
smalltalk.send(self, "_save", []);
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_at_',
smalltalk.method({
selector: 'at:',
fn: function (anIndex){
var self=this;
return smalltalk.send(self['@array'], "_at_", [anIndex]);
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_at_put_',
smalltalk.method({
selector: 'at:put:',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self['@array'], "_at_put_", [anIndex, anObject]);
smalltalk.send(self, "_save", []);
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_do_',
smalltalk.method({
selector: 'do:',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@array'], "_do_", [aBlock]);
smalltalk.send(self, "_save", []);
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_getArray',
smalltalk.method({
selector: 'getArray',
fn: function (){
var self=this;
var anArray=nil;
var aJSONArray=nil;
aJSONArray=smalltalk.send(self['@storage'], "_getItem_", ["TodoList"]);
anArray=(($receiver = aJSONArray) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeStorage", []);})() : (function(){return smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_readJSON_", [smalltalk.send((smalltalk.JSON || JSON), "_parse_", [aJSONArray])]);})();
return anArray;
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
self['@storage']=(typeof localStorage == 'undefined' ? nil : localStorage);
self['@array']=smalltalk.send(self, "_getArray", []);
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_initializeStorage',
smalltalk.method({
selector: 'initializeStorage',
fn: function (){
var self=this;
var anArray=nil;
anArray=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(self['@storage'], "_setItem_value_", ["TodoList", smalltalk.send(anArray, "_asJSON", [])]);
return anArray;
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_save',
smalltalk.method({
selector: 'save',
fn: function (){
var self=this;
smalltalk.send(self['@storage'], "_setItem_value_", ["TodoList", smalltalk.send(self['@array'], "_asJSON", [])]);
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_setArray',
smalltalk.method({
selector: 'setArray',
fn: function (){
var self=this;
return smalltalk.send(self, "_save", []);
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_remove_',
smalltalk.method({
selector: 'remove:',
fn: function (anObject){
var self=this;
smalltalk.send(self['@array'], "_remove_", [anObject]);
smalltalk.send(self, "_save", []);
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_lenght',
smalltalk.method({
selector: 'lenght',
fn: function (){
var self=this;
return smalltalk.send(self, "_size", []);
return self;}
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
'_size',
smalltalk.method({
selector: 'size',
fn: function (){
var self=this;
return smalltalk.send(self['@array'], "_size", []);
return self;}
}),
smalltalk.TodoStorage);



