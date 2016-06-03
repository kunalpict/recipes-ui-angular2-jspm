import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../shared/services/data.service';
@Component({ 
  selector: 'signup',
  templateUrl: 'app/signup/signup.component.html',
  directives: [CORE_DIRECTIVES],
  providers: [DataService]
})
export class SignupComponent {
    credential: any = {};
    newuser: any = {};
    constructor(private dataService: DataService) {
    }
    
    ngOnInit() {
    }

    create(){
    	console.log(this.newuser);
      this.dataService.create(this.newuser)
        .subscribe(() => {
          
        });
    }
    login(){
    	console.log(this.credential);
      this.dataService.login(this.credential)
        .subscribe(() => {
          
        });
    }
}
