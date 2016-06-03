import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../../shared/services/data.service';
import { UserService } from '../../shared/services/user';

@Component({ 
  selector: 'nav-header',
  providers: [DataService, UserService],
  templateUrl: 'app/navigation/header/header.component.html',
  styles: [
  `
  .navbar .nav > li > a {
    height:70px;
  }
  `
  ],
  directives: [CORE_DIRECTIVES]
})
export class HeaderComponent {

    constructor(private dataService: DataService, private user: UserService) {
    }
    
    ngOnInit() {

    }

      ngOnChanges(changes) {
      console.log('change'+changes);
    }
}
