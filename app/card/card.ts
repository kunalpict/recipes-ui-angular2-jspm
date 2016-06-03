import { Component, Input} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../shared/services/data.service';
import { RatingComponent } from '../rating/rating';
import { RouterLink} from 'angular2/router';

@Component({ 
  selector: 'card',
  providers: [DataService],
  templateUrl: 'app/card/card.component.html',
  directives: [CORE_DIRECTIVES, RatingComponent, RouterLink]
})
export class CardComponent {
	
	  @Input() info;
    @Input() isNew;

    constructor(private dataService: DataService) {
      
    }
    
    ngOnInit() {
      
    }
}
