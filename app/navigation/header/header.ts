import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../../shared/services/data.service';

@Component({ 
  selector: 'nav-header',
  providers: [DataService],
  template: `
    <header class="navbar navbar-inner navbar-fixed-top">
        <nav class="">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <span class="app-title">Recipes Catalogs</span>
            </div>
        </nav>
    </header>
  `,
  directives: [CORE_DIRECTIVES]
})
export class HeaderComponent {
	  constructor(private dataService: DataService) {
    }
    
    ngOnInit() {}
}
