import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../../shared/services/data.service';

@Component({ 
  selector: 'nav-footer',
  providers: [DataService],
  template: `<footer>
        <div class="navbar navbar-fixed-bottom">
            <div class="navbar-inner footer">
                <div class="">
                    <footer>
                        <div class="row">
                            <div class="col-md-12">
                              <span class="pull-right">
                                Created by <a href="http://twitter.com/kunalpict" target="_blank">Kunal Chaudhari</a>
                              </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </footer>`,
  directives: [CORE_DIRECTIVES]
})
export class FooterComponent {
	  constructor(private dataService: DataService) {
    }
    
    ngOnInit() {}
}
