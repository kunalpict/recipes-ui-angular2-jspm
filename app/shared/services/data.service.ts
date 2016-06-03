import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions, RequestMethod } from 'angular2/http';

//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
  
    baseUrl: string = 'http://api.myrecipeforum.com/ws';

    constructor(private http: Http) { }
    
    getRecipes() {
        return this.http.get(this.baseUrl + '/recipes')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    getNavPills() {
        return this.http.get(this.baseUrl + '/navpills.json')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    getRecipe(id: any) {
        return this.http.get(this.baseUrl + '/recipe/' + id)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    newRecipe(recipe:any) {
        let body = JSON.stringify(recipe);
        let headers = new Headers();
        headers.append( 'Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/recipe/new', body,  {
            headers: headers,
            method : "POST"
        })
          .map((res: Response) => res.json())
          .catch(this.handleError);
    }
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
