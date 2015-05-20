/// <reference path="../typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require("angular2/angular2");
var TodoList = (function () {
    function TodoList() {
        this.todos = ["Eat", "Sleep"];
    }
    TodoList.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoList.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    TodoList = __decorate([
        angular2_1.Component({
            selector: "todo-list"
        }),
        angular2_1.View({
            template: "\n\t\t<ul>\n\t\t\t<li *for=\"#todo of todos\">\n\t\t\t\t{{ todo }}\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<input #todotext (keyup)=\"doneTyping($event)\">\n\t\t<button (click)=\"addTodo(todotext.value)\">Add Todo</button>\n\t\t",
            directives: [angular2_1.For, angular2_1.If]
        })
    ], TodoList);
    return TodoList;
})();
angular2_1.bootstrap(TodoList);
