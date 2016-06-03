import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams, Router } from 'angular2/router';
import { DataService } from '../shared/services/data.service';
import { CardComponent } from '../card/card.component';
import { ToolBarComponent } from '../toolbar/toolbar.component';
import { RecipeActionComponent } from './action.recipe';

@Component({ 
  selector: 'Recipe',
  providers: [DataService],
  templateUrl: 'app/recipe/recipe.component.html',
  directives: [CORE_DIRECTIVES, RouterLink,CardComponent, ToolBarComponent]
})
export class RecipeComponent extends RecipeActionComponent {
	
    recipe: any = {
      info:{},
      ingredients:[],
      directions:[]
    };
  
    id:string;
  
    constructor(private dataService: DataService, private _routeParams: RouteParams, private router: Router) {
      super();
      this.id = _routeParams.get('id');
      console.log(this.id);
    }
    
    ngOnInit() {
      if(this.id) {
        this.dataService.getRecipe(this.id)
          .subscribe((r:any) => {
              this.recipe = r;
        });
      }
    }

    edit() {
      this.router.navigate(['Edit-recipe', { id: this.id}]);
    }
}
