import { Injectable } from 'angular2/core';
import { Http, Response, Request } from 'angular2/http';
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
          .map((res: Response) => res)
          .catch(this.handleError);
    }

    login(cred){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ 
            headers: headers,
            method: RequestMethod.Post,
            url: this.baseUrl + '/user/login',
            body: JSON.stringify(cred) 
        });
        return this.http.request(new Request(options))
          .map((res: Response) => res.json())
          .catch(this.handleError);
    }
    

    create(user){
        let body = JSON.stringify(user);
        return this.http.post(this.baseUrl + '/user/create', body)
          .map((res: Response) => res.json())
          .catch(this.handleError);
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
