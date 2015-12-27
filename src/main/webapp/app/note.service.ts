import {Injectable} from 'angular2/core'
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class NoteService {
    // getHeroes() {
    //     return Promise.resolve(HEROES);
    // }    
    //private _http:Http;
    _http: Http;
    
    constructor(http:Http) {
        this._http = http;    
    }
    
    getNotes() {
        console.log('Getting notes...');
        this._http.get('http://groovy-notes.herokuapp.com/api/notes')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(people => console.log('People=' + people));        
    }
}