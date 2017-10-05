import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

interface Options {
	limit?:number;
}

@Injectable()

export class AppHttpService {
	private url: string;
  	private header: Headers;

	constructor (private http: Http) {
		this.setAccessToken();
	}

	setAccessToken () {
	    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJiZTczMzM0Y2Q5MDRhZTg2ZGI5YzQyMWEyMjFmNmNlODdlNDIyYjM3ZTkyNmY1YTc1YjQxZjFlNjU0NTA4NzIzODI1NjM3M2IyMTYwNDkyIn0.eyJhdWQiOiIyIiwianRpIjoiYmJlNzMzMzRjZDkwNGFlODZkYjljNDIxYTIyMWY2Y2U4N2U0MjJiMzdlOTI2ZjVhNzViNDFmMWU2NTQ1MDg3MjM4MjU2MzczYjIxNjA0OTIiLCJpYXQiOjE1MDcwMDExNTcsIm5iZiI6MTUwNzAwMTE1NywiZXhwIjoxNTM4NTM3MTU3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.SVqz641OpNhh7dpZa0IjraRmX0hEjqlIMssFHRjofDUy-juDtRyjIOJHvOJ1mZ9xOQyIPBCJdVIZtGUHKPL7vSyWIJlZf5LXo10CS1gyYOBJonK-bAkQuJkdn0ctwoyIyb4cMtXIFPZecIRlYd_RnS62HkIijOyawdbydFoTs1ojiBUGNe4mGNGChBiaixGmh2CQZRLAlJaGV8aGPtp6l7FYCuoeShL9aXmXOQhRY6AeURFdlxMX8Lsm5mlkVT2cPlOV4PDpOiyEok6qMhMouTxEfbJaTSNfmo8QVCFpzLEyCt7mGQbkMi8X8d0v56tacpD2keWxyQTGvS2lxuaURdyTN4eHzNDppFQv81jBZWZKHIDO95LBXW7yOnxRcordyUds78s-I4qKhikcEvRDpqynTl_-2UL-NhAHoBj4ozKTQIAMgixDKeTHVrKnoBVfg7LuthN3KmxKjnrS7DZXX25YiNmTVbDeTsFh9oXHId08DtBJQazeISJBTFuaFu47xfrrFMM7Ux2Q5ZSXACuEp8Cqxxyoy3qT4iKxtMRyOgeO7Xwo5nfsXF5d-o3Q3rIE5214cw1jlVv68Jou580tmJ4rmce-tHuO4YYGX1fvhpsm7sJhRUfzaZ5ar7yEC6HKGW31CnsK9X-9_TAseUOHEyk-lZWEazVPWPk7F0jvz44';
	    this.header = new Headers({'Authorization': 'Bearer ' + token});
	}

	builder (resource: string) {
		this.url = 'http://localhost:8000/api/' + resource;
		return this;
	}


	list (options: Options = {}) {
		let url = this.url;

		if(options.limit == undefined) {
			options.limit = 20;
		}

		url += '?limit=' + options.limit

		return this.http.get(url, {headers: this.header})
	 		.toPromise()
			.then((res) => {
	    	return res.json() || {};
	  	});
	}

	view (id: number) {
		return this.http.get(this.url + '/' + id, {headers: this.header})
	 		.toPromise()
			.then((res) => {
	    	return res.json() || {};
	  	});
	}

	update (id: number, data: Object) {
		return this.http.put(this.url + '/' + id, data, {headers: this.header})
	 		.toPromise()
			.then((res) => {
	    	return res.json() || {};
	  	});
	}

	insert (data: Object) {
		return this.http.post(this.url, data, {headers: this.header})
	 		.toPromise()
			.then((res) => {
	    	return res.json() || {};
	  	});
	}

	delete (id: number) {
		return this.http.delete(this.url + '/' + id, {headers: this.header})
	 		.toPromise()
			.then((res) => {
	    	return res.json() || {};
	  	});
	}


}