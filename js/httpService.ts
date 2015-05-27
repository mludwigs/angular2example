/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component} from "angular2/angular2"

export class HTTP {
	url: string;
	
	constructor(private method: string) {
		console.log(method);
	}
	
	private makeXmlReq() {
		console.log("making req to" + this.url);
	}
	
	get(url: string) {
		this.url = url;
		this.makeXmlReq();
	}
	
}