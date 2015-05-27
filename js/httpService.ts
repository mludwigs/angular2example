/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component} from "angular2/angular2"

export class HTTP {
	url: string;
	sucess: Function;
	
	constructor(private method: string) {
		console.log(method);
	}
	
	private makeXmlReq() {
		console.log("making req to" + this.url);
		var ajax = new XMLHttpRequest();
		var self = this;
		ajax.open(this.method, this.url, true);
		ajax.send();
		ajax.onreadystatechange = function () {
			if (ajax.status >= 400) {
				console.log("fail");
			}
			
			if (ajax.readyState === 4) {
				self.sucess(ajax.responseText);
			}
		}
	}
	
	get(url: string, cb: Function) {
		this.url = url;
		this.sucess = cb;
		console.log(this.sucess);
		this.makeXmlReq();
	}
	
}