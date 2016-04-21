import { Component, Input} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../../shared/services/data.service';
import { CardComponent } from '../../card/card';

@Component({ 
  selector: 'recipes-grid',
  providers: [DataService],
  templateUrl: 'app/recipes/component/recipes.grid.component.html',
  directives: [CORE_DIRECTIVES, CardComponent]
})
export class RecipesGridComponent {
	
	  recipes: any[] = [];
    @Input() category;

    constructor(private dataService: DataService) {
      
    }
    
    ngOnInit() {
      this.dataService.getRecipes()
        .subscribe((recipes:any[]) => {
          this.recipes = recipes;
        });
    }
}
