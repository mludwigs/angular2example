/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, For, If} from "angular2/angular2";
import {HTTP} from "js/httpService";

@Component({
	selector: "todo-list"
})

@View({
	template: `
		<ul>
			<li *for="#todo of todos">
				{{ todo }}
			</li>
		</ul>

		<input #todotext (keyup)="doneTyping($event)">
		<button (click)="addTodo(todotext.value)">Add Todo</button>
		`,
		directives: [For, If]	
})

class TodoList {

	todos: Array<string>;

	constructor() {
		this.todos = ["Eat", "Sleep"]
	}

	addTodo(todo: string) {
		this.todos.push(todo);
		
		var http = new HTTP("GET").get("hello");
	}

	doneTyping($event) {
		if ($event.which === 13) {
			this.addTodo($event.target.value);
			$event.target.value = null;
		}
	}
}

bootstrap(TodoList);
