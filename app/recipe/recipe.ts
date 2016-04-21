import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../shared/services/data.service';
import { CardComponent } from '../card/card';
import { ToolBarComponent } from '../toolbar/toolbar';

@Component({ 
  selector: 'Recipe',
  providers: [DataService],
  templateUrl: 'app/recipe/recipe.component.html',
  directives: [CORE_DIRECTIVES, RouterLink,CardComponent, ToolBarComponent]
})
export class RecipeComponent {
	
    recipe: any = {
      info:{},
      ingredients:[]
    };
  
    constructor(private dataService: DataService, private _routeParams: RouteParams) {
      
    }
    
    ngOnInit() {
      this.dataService.getRecipe()
        .subscribe((r:any) => {
           console.log(r);
            this.recipe = r;
        });
    }
}
