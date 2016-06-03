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
export class RecipeComponent extends RecipeActionComponent {
	
    recipe: any = {
      info:{},
      ingredients:[],
      directions:[]
    };
  
    id:string;
    isNew:boolean = true;
    isEdit:boolean = true;
    isSave:boolean = false;
    constructor(private dataService: DataService, private _routeParams: RouteParams) {
      super();
      this.id = _routeParams.get('id');
      console.log(this.id);
    }
    
    ngOnInit() {
      console.log(this.id);
      if(this.id) {
        this.isNew = false;
        this.dataService.getRecipe(this.id)
          .subscribe((r:any) => {
              this.recipe = r;
        });
      }

      console.log(this.isNew);
    }
}
