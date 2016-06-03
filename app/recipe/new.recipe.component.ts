import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams, Router } from 'angular2/router';
import { DataService } from '../shared/services/data.service';
import { CardComponent } from '../card/card.component';
import { ToolBarComponent } from '../toolbar/toolbar.component';
import { RecipeActionComponent } from './action.recipe';
import { Response} from 'angular2/http';

@Component({ 
  selector: 'Recipe',
  providers: [DataService],
  templateUrl: 'app/recipe/new.recipe.component.html',
  directives: [CORE_DIRECTIVES, RouterLink,CardComponent, ToolBarComponent]
})
export class NewRecipeComponent extends RecipeActionComponent {
	
    recipe: any = {
      info:{
      },
      ingredients:[],
      directions:[]
    };
  
    constructor(private dataService: DataService, private _routeParams: RouteParams, private router: Router) {
      super();
    }

    ngOnInit() {
    }

    save() {
      this.isSave = false;
      this.isEdit = true;
      this.dataService.newRecipe(this.recipe)
          .subscribe((res:Response) => {
              console.log(res.status)
              if(res.status === 403) {
              console.log("inside ");
                this.router.navigate(['Login']);
              } else {
                this.router.navigate(['Recipe', { id: res.json().id}]);
              }
        });
    }
}
