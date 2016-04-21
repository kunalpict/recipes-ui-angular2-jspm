import { Component, Input} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../shared/services/data.service';

@Component({ 
  selector: 'rating',
  providers: [DataService],
  template: `
  <fieldset class="rating">
    <input type="radio" id="star5" name="rating" value="5" />
    <label for="star5" title="Rocks!">5 stars</label>
    <input type="radio" id="star4" name="rating" value="4" />
    <label for="star4" title="Pretty good">4 stars</label>
    <input type="radio" id="star3" name="rating" value="3" />
    <label for="star3" title="Meh">3 stars</label>
    <input type="radio" id="star2" name="rating" value="2" />
    <label for="star2" title="Kinda bad">2 stars</label>
    <input type="radio" id="star1" name="rating" value="1" />
    <label for="star1" title="Sucks big time">1 star</label>
  </fieldset>`,
  directives: [CORE_DIRECTIVES]
})
export class RatingComponent {
	  constructor(private dataService: DataService) {
      
    }
    
    ngOnInit() {
      
    }
}