smalltalk.addClass('Todo', smalltalk.Widget, ['observers', 'isDone', 'text', 'id', 'onTodoChanged'], 'TodoList');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializing',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@isDone']=false;
self['@observers']=smalltalk.send((smalltalk.Array || Array), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09isDone%20%3A%3D%20false.%0A%09observers%20%3A%3D%20Array%20new.'),
messageSends: ["initialize", "new"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_isDone'),
smalltalk.method({
selector: unescape('isDone'),
category: 'accessing',
fn: function (){
var self=this;
return self['@isDone'];
return self;},
args: [],
source: unescape('isDone%0A%09%5E%20isDone'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_isDone_'),
smalltalk.method({
selector: unescape('isDone%3A'),
category: 'accessing',
fn: function (aBool){
var self=this;
self['@isDone']=aBool;
return self;},
args: ["aBool"],
source: unescape('isDone%3A%20aBool%0A%09isDone%20%3A%3D%20aBool.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_text'),
smalltalk.method({
selector: unescape('text'),
category: 'accessing',
fn: function (){
var self=this;
return self['@text'];
return self;},
args: [],
source: unescape('text%0A%09%5E%20text'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_text_'),
smalltalk.method({
selector: unescape('text%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
self['@text']=anObject;
return self;},
args: ["anObject"],
source: unescape('text%3A%20anObject%0A%09text%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_toggleIsDone'),
smalltalk.method({
selector: unescape('toggleIsDone'),
category: 'accessing',
fn: function (){
var self=this;
smalltalk.send(self, "_isDone_", [smalltalk.send(self['@isDone'], "_not", [])]);
return self;},
args: [],
source: unescape('toggleIsDone%0A%09self%20isDone%3A%20isDone%20not'),
messageSends: ["isDone:", "not"],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function (){
var self=this;
return self['@id'];
return self;},
args: [],
source: unescape('id%0A%09%5E%20id'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@id']=aString;
return self;},
args: ["aString"],
source: unescape('id%3A%20aString%0A%09id%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var input=nil;
(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_id", [])]);return smalltalk.send($rec, "_with_", [(function(){input=(function($rec){smalltalk.send($rec, "_type_", ["checkbox"]);return smalltalk.send($rec, "_onClick_", [(function(){smalltalk.send(self, "_toggleIsDone", []);smalltalk.send(self['@onTodoChanged'], "_value_", [self]);return smalltalk.send(smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_next", []), "_toggleClass_", ["done"]);})]);})(smalltalk.send(html, "_input", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [self['@text']]);})]);})(smalltalk.send(html, "_li", []));
((($receiver = self['@isDone']).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(input, "_at_put_", ["checked", "checked"]);return smalltalk.send(smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_next", []), "_addClass_", ["done"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(input, "_at_put_", ["checked", "checked"]);return smalltalk.send(smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_next", []), "_addClass_", ["done"]);})]));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7C%20input%20%7C%0A%09html%20li%0A%09%09id%3A%20self%20id%3B%0A%09%09with%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20input%20%3A%3D%20html%20input%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09type%3A%20%27checkbox%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09onClick%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20toggleIsDone.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onTodoChanged%20value%3A%20self.%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28input%20asJQuery%20next%29%20toggleClass%3A%20%27done%27%20%5D.%0A%09%09html%20span%20with%3A%20text%20%5D.%0A%09isDone%20ifTrue%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20input%20at%3A%20%27checked%27%20put%3A%20%27checked%27.%0A%20%20%20%20%20%20%20%20%20%20%28input%20asJQuery%20next%29%20addClass%3A%20%27done%27%5D.'),
messageSends: ["id:", "id", "with:", "type:", "onClick:", "toggleIsDone", "value:", "toggleClass:", "next", "asJQuery", "input", "span", "li", "ifTrue:", "at:put:", "addClass:"],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
unescape('_onTodoChangedDo_'),
smalltalk.method({
selector: unescape('onTodoChangedDo%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
self['@onTodoChanged']=aBlock;
return self;},
args: ["aBlock"],
source: unescape('onTodoChangedDo%3A%20aBlock%0A%09onTodoChanged%20%3A%3D%20aBlock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Todo);


smalltalk.addMethod(
unescape('_fromDictionary_'),
smalltalk.method({
selector: unescape('fromDictionary%3A'),
category: 'not yet classified',
fn: function (aDict){
var self=this;
var todo=nil;
todo=smalltalk.send(self, "_new", []);
smalltalk.send(todo, "_id_", [smalltalk.send(aDict, "_at_", ["id"])]);
smalltalk.send(todo, "_text_", [smalltalk.send(aDict, "_at_", ["text"])]);
smalltalk.send(todo, "_isDone_", [smalltalk.send(aDict, "_at_", ["isDone"])]);
return todo;
return self;},
args: ["aDict"],
source: unescape('fromDictionary%3A%20aDict%0A%09%7C%20todo%20%7C%0A%09todo%20%3A%3D%20self%20new.%0A%09todo%20id%3A%20%28aDict%20at%3A%20%27id%27%29.%0A%09todo%20text%3A%20%28aDict%20at%3A%20%27text%27%29.%0A%09todo%20isDone%3A%20%28aDict%20at%3A%20%27isDone%27%29.%0A%09%5E%20todo'),
messageSends: ["new", "id:", "at:", "text:", "isDone:"],
referencedClasses: []
}),
smalltalk.Todo.klass);

smalltalk.addMethod(
unescape('_newWithText_'),
smalltalk.method({
selector: unescape('newWithText%3A'),
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_text_", [aString]);
return self;},
args: ["aString"],
source: unescape('newWithText%3A%20aString%0A%09%5E%20self%20new%20text%3A%20aString'),
messageSends: ["text:", "new"],
referencedClasses: []
}),
smalltalk.Todo.klass);

smalltalk.addMethod(
unescape('_fromDictionary_withCallback_'),
smalltalk.method({
selector: unescape('fromDictionary%3AwithCallback%3A'),
category: 'not yet classified',
fn: function (aDict, aBlock){
var self=this;
var todo=nil;
todo=smalltalk.send(self, "_fromDictionary_", [aDict]);
smalltalk.send(todo, "_onTodoChangedDo_", [aBlock]);
return todo;
return self;},
args: ["aDict", "aBlock"],
source: unescape('fromDictionary%3A%20aDict%20withCallback%3A%20aBlock%0A%09%7C%20todo%20%7C%0A%09todo%20%3A%3D%20self%20fromDictionary%3A%20aDict.%0A%09todo%20onTodoChangedDo%3A%20aBlock.%0A%09%5E%20todo'),
messageSends: ["fromDictionary:", "onTodoChangedDo:"],
referencedClasses: []
}),
smalltalk.Todo.klass);


smalltalk.addClass('TodoList', smalltalk.Widget, ['todos', 'container'], 'TodoList');
smalltalk.addMethod(
unescape('_addTodo_'),
smalltalk.method({
selector: unescape('addTodo%3A'),
category: 'adding/removing',
fn: function (aTodo){
var self=this;
smalltalk.send(aTodo, "_id_", [smalltalk.send(((($receiver = smalltalk.send(self['@todos'], "_lenght", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])), "_asString", [])]);
smalltalk.send(aTodo, "_onTodoChangedDo_", [(function(todo){return smalltalk.send(self['@todos'], "_at_put_", [smalltalk.send(smalltalk.send(todo, "_id", []), "_asNumber", []), todo]);})]);
smalltalk.send(self['@todos'], "_add_", [aTodo]);
smalltalk.send(aTodo, "_appendToJQuery_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
return self;},
args: ["aTodo"],
source: unescape('addTodo%3A%20aTodo%0A%09aTodo%20id%3A%20%28todos%20lenght%20+%201%29%20asString.%0A%09aTodo%20onTodoChangedDo%3A%20%5B%20%3Atodo%20%7C%20todos%20at%3A%20%28todo%20id%20asNumber%29%20put%3A%20todo%20%5D.%0A%20%20%20%20%20%20%20%09todos%20add%3A%20aTodo.%0A%20%20%20%20%20%20%20%09aTodo%20appendToJQuery%3A%20container%20asJQuery.'),
messageSends: ["id:", "asString", unescape("+"), "lenght", "onTodoChangedDo:", "at:put:", "asNumber", "id", "add:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TodoList);

smalltalk.addMethod(
unescape('_removeTodo_'),
smalltalk.method({
selector: unescape('removeTodo%3A'),
category: 'adding/removing',
fn: function (aTodo){
var self=this;

return self;},
args: ["aTodo"],
source: unescape('removeTodo%3A%20aTodo'),
messageSends: [],
referencedClasses: []
}),
smalltalk.TodoList);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["application"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderHeaderOn_", [html]);smalltalk.send(self, "_renderBodyOn_", [html]);return smalltalk.send(self, "_renderFooterOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09id%3A%20%27application%27%3B%0A%09%09with%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20renderHeaderOn%3A%20html.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20renderBodyOn%3A%20html.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20renderFooterOn%3A%20html.%20%5D'),
messageSends: ["id:", "with:", "renderHeaderOn:", "renderBodyOn:", "renderFooterOn:", "div"],
referencedClasses: []
}),
smalltalk.TodoList);

smalltalk.addMethod(
unescape('_handleInput_'),
smalltalk.method({
selector: unescape('handleInput%3A'),
category: 'events',
fn: function (anEvent){
var self=this;
var text=nil;
var todo=nil;
var html=nil;
text=smalltalk.send(smalltalk.send(anEvent, "_target", []), "_value", []);
todo=smalltalk.send((smalltalk.Todo || Todo), "_newWithText_", [text]);
smalltalk.send(self, "_addTodo_", [todo]);
return self;},
args: ["anEvent"],
source: unescape('handleInput%3A%20anEvent%0A%09%7C%20text%20todo%20html%20%7C%0A%20%20%20%20%20%20%20%20text%20%3A%3D%20anEvent%20target%20value.%0A%20%20%20%20%20%20%20%20todo%20%3A%3D%20Todo%20newWithText%3A%20text.%0A%20%09self%20addTodo%3A%20todo'),
messageSends: ["value", "target", "newWithText:", "addTodo:"],
referencedClasses: [smalltalk.Todo]
}),
smalltalk.TodoList);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializing',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
self['@todos']=smalltalk.send((smalltalk.TodoStorage || TodoStorage), "_new", []);
self['@container']=unescape("div%23todos%20ol");
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09todos%20%3A%3D%20TodoStorage%20new.%0A%09container%20%3A%3D%20%27div%23todos%20ol%27'),
messageSends: ["initialize", "new"],
referencedClasses: [smalltalk.nil]
}),
smalltalk.TodoList);

smalltalk.addMethod(
unescape('_renderBodyOn_'),
smalltalk.method({
selector: unescape('renderBodyOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["body"]);smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderFormOn_", [html]);return smalltalk.send(self, "_renderTodosOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderBodyOn%3A%20html%0A%09html%20div%0A%09%09id%3A%20%27body%27%3B%0A%09%09class%3A%20%27section%27%3B%0A%09%09with%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20renderFormOn%3A%20html.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20renderTodosOn%3A%20html%20%5D'),
messageSends: ["id:", "class:", "with:", "renderFormOn:", "renderTodosOn:", "div"],
referencedClasses: []
}),
smalltalk.TodoList);

smalltalk.addMethod(
unescape('_renderFooterOn_'),
smalltalk.method({
selector: unescape('renderFooterOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["footer"]);smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", ["Example Todo application for Amber Smalltalk by rbistolfi"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderFooterOn%3A%20html%0A%09html%20div%0A%09%09id%3A%20%27footer%27%3B%0A%09%09class%3A%20%27section%27%3B%0A%09%09with%3A%20%5B%20html%20p%20with%3A%20%27Example%20Todo%20application%20for%20Amber%20Smalltalk%20by%20rbistolfi%27%20%5D'),
messageSends: ["id:", "class:", "with:", "p", "div"],
referencedClasses: []
}),
smalltalk.TodoList);

smalltalk.addMethod(
unescape('_renderFormOn_'),
smalltalk.method({
selector: unescape('renderFormOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var input=nil;
var defaultText=nil;
defaultText=unescape("What%20needs%20to%20be%20done%3F");
(function($rec){smalltalk.send($rec, "_id_", ["form"]);return smalltalk.send($rec, "_with_", [(function(){return input=(function($rec){smalltalk.send($rec, "_type_", ["text"]);return smalltalk.send($rec, "_onKeyUp_", [(function(event){return ((($receiver = smalltalk.send(smalltalk.send(event, "_keyCode", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_handleInput_", [event]);return smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val_", [""]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_handleInput_", [event]);return smalltalk.send(smalltalk.send(input, "_asJQuery", []), "_val_", [""]);})]));})]);})(smalltalk.send(html, "_input", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(smalltalk.send(input, "_element", []), "_placeholder_", [defaultText]);
return self;},
args: ["html"],
source: unescape('renderFormOn%3A%20html%0A%09%7C%20input%20defaultText%20%7C%0A%09defaultText%20%3A%3D%20%27What%20needs%20to%20be%20done%3F%27.%0A%09html%20div%0A%09%09id%3A%20%27form%27%3B%0A%09%09with%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20input%20%3A%3D%20html%20input%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09type%3A%20%27text%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09onKeyUp%3A%20%5B%20%3Aevent%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28event%20keyCode%20%3D%2013%29%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20handleInput%3A%20event.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20input%20asJQuery%20val%3A%20%27%27%20%5D%20%5D%20%5D.%0A%09input%20element%20placeholder%3A%20defaultText.'),
messageSends: ["id:", "with:", "type:", "onKeyUp:", "ifTrue:", unescape("%3D"), "keyCode", "handleInput:", "val:", "asJQuery", "input", "div", "placeholder:", "element"],
referencedClasses: []
}),
smalltalk.TodoList);

smalltalk.addMethod(
unescape('_renderHeaderOn_'),
smalltalk.method({
selector: unescape('renderHeaderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["header"]);smalltalk.send($rec, "_class_", ["section"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Todos"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderHeaderOn%3A%20html%0A%09html%20div%0A%09%09id%3A%20%27header%27%3B%0A%09%09class%3A%20%27section%27%3B%0A%09%09with%3A%20%5B%20html%20h1%20with%3A%20%27Todos%27%20%5D'),
messageSends: ["id:", "class:", "with:", "h1", "div"],
referencedClasses: []
}),
smalltalk.TodoList);

smalltalk.addMethod(
unescape('_renderTodosOn_'),
smalltalk.method({
selector: unescape('renderTodosOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["todos"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_ol", []), "_with_", [(function(){return smalltalk.send(self['@todos'], "_do_", [(function(todo){return smalltalk.send(smalltalk.send((smalltalk.Todo || Todo), "_fromDictionary_withCallback_", [todo, (function(todo){return smalltalk.send(self['@todos'], "_at_put_", [smalltalk.send(smalltalk.send(todo, "_id", []), "_asNumber", []), todo]);})]), "_renderOn_", [html]);})]);})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderTodosOn%3A%20html%0A%09html%20div%0A%09%09id%3A%20%27todos%27%3B%0A%09%09with%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20html%20ol%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09with%3A%20%5B%20todos%20do%3A%20%5B%20%3Atodo%20%7C%20%28Todo%20fromDictionary%3A%20todo%20withCallback%3A%20%20%5B%20%3Atodo%20%7C%20todos%20at%3A%20%28todo%20id%20asNumber%29%20put%3A%20todo%20%5D%29%20renderOn%3A%20html%20%5D%5D%5D'),
messageSends: ["id:", "with:", "ol", "do:", "renderOn:", "fromDictionary:withCallback:", "at:put:", "asNumber", "id", "div"],
referencedClasses: [smalltalk.Todo]
}),
smalltalk.TodoList);


smalltalk.addMethod(
unescape('_run'),
smalltalk.method({
selector: unescape('run'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('run%0A%09self%20new%20appendToJQuery%3A%20%27body%27%20asJQuery'),
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
smalltalk.TodoList.klass);


smalltalk.addClass('TodoStorage', smalltalk.Object, ['storage', 'array'], 'TodoList');
smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self['@array'], "_add_", [anObject]);
smalltalk.send(self, "_save", []);
return self;},
args: ["anObject"],
source: unescape('add%3A%20anObject%0A%09array%20add%3A%20anObject.%0A%09self%20save.'),
messageSends: ["add:", "save"],
referencedClasses: []
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.send(self['@array'], "_at_", [anIndex]);
return self;},
args: ["anIndex"],
source: unescape('at%3A%20anIndex%0A%09%5E%20array%20at%3A%20anIndex'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (anIndex, anObject){
var self=this;
smalltalk.send(self['@array'], "_at_put_", [anIndex, anObject]);
smalltalk.send(self, "_save", []);
return self;},
args: ["anIndex", "anObject"],
source: unescape('at%3A%20anIndex%20put%3A%20anObject%0A%09array%20at%3A%20anIndex%20put%3A%20anObject.%0A%09self%20save'),
messageSends: ["at:put:", "save"],
referencedClasses: []
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'iterating',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@array'], "_do_", [aBlock]);
smalltalk.send(self, "_save", []);
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%09array%20do%3A%20aBlock.%0A%09self%20save.'),
messageSends: ["do:", "save"],
referencedClasses: []
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_getArray'),
smalltalk.method({
selector: unescape('getArray'),
category: 'accessing',
fn: function (){
var self=this;
var anArray=nil;
var aJSONArray=nil;
aJSONArray=smalltalk.send(self['@storage'], "_getItem_", ["TodoList"]);
anArray=(($receiver = aJSONArray) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeStorage", []);})() : (function(){return smalltalk.send((typeof smalltalk == 'undefined' ? nil : smalltalk), "_readJSON_", [smalltalk.send((smalltalk.JSON || JSON), "_parse_", [aJSONArray])]);})();
return anArray;
return self;},
args: [],
source: unescape('getArray%0A%09%7C%20anArray%20aJSONArray%20%7C%0A%09aJSONArray%20%3A%3D%20storage%20getItem%3A%20%27TodoList%27.%0A%09anArray%20%3A%3D%20aJSONArray%20ifNil%3A%20%5B%20self%20initializeStorage%20%5D%20ifNotNil%3A%20%5B%20smalltalk%20readJSON%3A%20%28JSON%20parse%3A%20aJSONArray%29%20%5D.%0A%09%5E%20anArray%0A%09'),
messageSends: ["getItem:", "ifNil:ifNotNil:", "initializeStorage", "readJSON:", "parse:"],
referencedClasses: []
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializing',
fn: function (){
var self=this;
self['@storage']=(typeof localStorage == 'undefined' ? nil : localStorage);
self['@array']=smalltalk.send(self, "_getArray", []);
return self;},
args: [],
source: unescape('initialize%0A%09storage%20%3A%3D%20localStorage.%0A%09array%20%3A%3D%20self%20getArray%20'),
messageSends: ["getArray"],
referencedClasses: []
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_initializeStorage'),
smalltalk.method({
selector: unescape('initializeStorage'),
category: 'initializing',
fn: function (){
var self=this;
var anArray=nil;
anArray=smalltalk.send((smalltalk.Array || Array), "_new", []);
smalltalk.send(self['@storage'], "_setItem_value_", ["TodoList", smalltalk.send(anArray, "_asJSON", [])]);
return anArray;
return self;},
args: [],
source: unescape('initializeStorage%0A%09%7C%20anArray%20%7C%0A%09anArray%20%3A%3D%20Array%20new.%0A%09storage%20setItem%3A%20%27TodoList%27%20value%3A%20anArray%20asJSON.%0A%09%5E%20anArray'),
messageSends: ["new", "setItem:value:", "asJSON"],
referencedClasses: [smalltalk.Array]
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
category: 'persistence',
fn: function (){
var self=this;
smalltalk.send(self['@storage'], "_setItem_value_", ["TodoList", smalltalk.send(self['@array'], "_asJSON", [])]);
return self;},
args: [],
source: unescape('save%0A%09storage%20setItem%3A%20%27TodoList%27%20value%3A%20array%20asJSON'),
messageSends: ["setItem:value:", "asJSON"],
referencedClasses: []
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_setArray'),
smalltalk.method({
selector: unescape('setArray'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_save", []);
return self;},
args: [],
source: unescape('setArray%0A%09%5E%20self%20save'),
messageSends: ["save"],
referencedClasses: []
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'adding/removing',
fn: function (anObject){
var self=this;
smalltalk.send(self['@array'], "_remove_", [anObject]);
smalltalk.send(self, "_save", []);
return self;},
args: ["anObject"],
source: unescape('remove%3A%20anObject%0A%09array%20remove%3A%20anObject.%0A%09self%20save'),
messageSends: ["remove:", "save"],
referencedClasses: []
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_lenght'),
smalltalk.method({
selector: unescape('lenght'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_size", []);
return self;},
args: [],
source: unescape('lenght%0A%09%5E%20self%20size'),
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.TodoStorage);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@array'], "_size", []);
return self;},
args: [],
source: unescape('size%0A%09%5E%20array%20size'),
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.TodoStorage);



