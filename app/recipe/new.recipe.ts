import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../shared/services/data.service';
import { CardComponent } from '../card/card';
import { ToolBarComponent } from '../toolbar/toolbar';
import { RecipeActionComponent } from './action.recipe';

@Component({ 
  selector: 'Recipe',
  providers: [DataService],
  templateUrl: 'app/recipe/recipe.component.html',
  directives: [CORE_DIRECTIVES, RouterLink,CardComponent, ToolBarComponent]
})
export class NewRecipeComponent extends RecipeActionComponent {
	
    recipe: any = {
      info:{
        user: "kunalpict"
      },
      ingredients:[],
      directions:[]
    };
  
    constructor(private dataService: DataService, private _routeParams: RouteParams) {
      super();
    }

    ngOnInit() {
    }

    save() {
      this.isSave = false;
      this.isEdit = true;
      this.dataService.newRecipe(this.recipe)
          .subscribe((r:any) => {
              console.log(r);
        });
    }
}
