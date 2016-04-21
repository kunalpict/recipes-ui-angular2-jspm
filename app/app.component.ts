import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { RecipesComponent } from './recipes/recipes';
import { RecipeComponent } from './recipe/recipe';
import { HeaderComponent } from './Navigation/header/header';
import { FooterComponent } from './Navigation/footer/footer';

@Component({ 
  selector: 'app-container',
  template: `<nav-header></nav-header>
  <router-outlet></router-outlet>
  <nav-footer></nav-footer>`,
  directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent],
})
@RouteConfig([
  { path: '/', name: 'Recipes', component: RecipesComponent, useAsDefault: true },
  { path: '/recipes/:category', name: 'Recipes', component: RecipesComponent},
  { path: '/recipe/:id', name: 'Recipe', component: RecipeComponent}
])
export class AppComponent {
  
  constructor() {

  }
  
}
