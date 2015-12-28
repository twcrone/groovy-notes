import {OnInit} from 'angular2/core';
import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {MessageFilterPipe} from './message-filter.pipe'

@Component({
    selector: 'my-app',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'app/app.component.html',
    directives: [HeroDetailComponent],
    providers: [HeroService],
    pipes: [MessageFilterPipe]
})
export class AppComponent implements OnInit { 
    public heroes: Hero[];
    
    http: Http;
    
    constructor(http: Http) {
        this.http = http; 
    }
    
    getHeroes() {
       console.log('Getting notes dude...');
       var observable = this.http.get('/api/notes');
       observable.subscribe(resp => this.heroes = resp.json());
    }
    
    ngOnInit() {
         this.getHeroes();
    }
}

