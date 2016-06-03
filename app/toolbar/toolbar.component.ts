import { Component, Input} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../shared/services/data.service';

@Component({ 
  selector: 'toolbar',
  providers: [DataService],
  template: `
  <div class="col-xs-12 col-sm-12 strip-bar">
    <span class="col-xs-2 col-xs-offset-1">
      <span class="col-xs-12 col-sm-12 text-center"> <i class="fa fa-heart-o fa-2x"></i></span>
      <span  class="hidden-xs col-sm-12 text-center text-bold"> Save </span>
    </span>
    <span class="col-xs-2">
      <span  class="col-xs-12 col-sm-12 text-center text-bold"><i class="fa fa-user fa-2x"></i> </span>
      <span  class="hidden-xs col-sm-12 text-center text-bold">I made it</span>
    </span>
    <span class="col-xs-2">
      <span  class="col-xs-12 col-sm-12 text-center text-bold"><i class="fa fa-star fa-2x"></i></span>
      <span  class="hidden-xs col-sm-12 text-center text-bold"> Rate it </span>
    </span>
    <span class="col-xs-2">
      <span  class="col-xs-12 col-sm-12 text-center"><i class="fa fa-share fa-2x"></i></span>
      <span  class="hidden-xs col-sm-12 text-center text-bold"> share</span>
    </span>
    <span class="col-xs-2">
      <span  class="col-xs-12 col-sm-12 text-center"><i class="fa fa-print fa-2x"></i></span>
      <span  class="hidden-xs col-sm-12 text-center text-bold"> Print</span>
    </span>
  </div>`,
  directives: [CORE_DIRECTIVES]
})
export class ToolBarComponent {
	  constructor(private dataService: DataService) {
      
    }
    
    ngOnInit() {
      
    }
}
