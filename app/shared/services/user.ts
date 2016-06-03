import { Injectable } from 'angular2/core';


@Injectable()
export class UserService {
	static user: any = {
		name:'kunal chaudhari'
	};

	constructor() {
    }

	setUser(user:any){
		UserService.user = user;
	}

	getUser(){
		return UserService.user;
	}

}