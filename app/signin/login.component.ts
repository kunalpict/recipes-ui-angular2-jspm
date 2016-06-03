import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../shared/services/data.service';
import { UserService } from '../shared/services/user';
import { Router } from 'angular2/router';

@Component({ 
  selector: 'login',
  templateUrl: 'app/signin/login.component.html',
  directives: [CORE_DIRECTIVES],
  providers: [DataService, UserService]
})
export class LoginComponent {
    credential: any = {};
    newuser: any = {};
    constructor(private dataService: DataService,
      private user: UserService,
      private router: Router) {
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
        .subscribe((user:any) => {
          this.user.setUser(user);
          this.router.navigate(['Recipes']);
        });

    }
}
