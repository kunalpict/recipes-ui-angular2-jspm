import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NewRecipeComponent } from './recipe/new.recipe.component';
import { EditRecipeComponent } from './recipe/edit.recipe.component';
import { HeaderComponent } from './Navigation/header/header.component';
import { FooterComponent } from './Navigation/footer/footer.component';
import { LoginComponent } from './signin/login.component';
import { SignupComponent } from './signup/signup.component';


@Component({ 
  selector: 'app-container',
  template: `<nav-header></nav-header>
  <router-outlet></router-outlet>
  <nav-footer></nav-footer>`,
  directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent],
})
@RouteConfig([
  { path: '/', name: 'Recipes', component: RecipesComponent, useAsDefault: true },
  { path: '/recipes/:category', name: 'Recipescat', component: RecipesComponent},
  { path: '/recipe/:id', name: 'Recipe', component: RecipeComponent},
  { path: '/recipe/new', name: 'New-recipe', component: NewRecipeComponent},
  { path: '/recipe/edit/:id', name: 'Edit-recipe', component: EditRecipeComponent},
  { path: '/login', name: 'Login', component: LoginComponent},
  { path: '/signup', name: 'SignUp', component: SignupComponent}
 
])
export class AppComponent {
  
  constructor() {

  }
  
}
