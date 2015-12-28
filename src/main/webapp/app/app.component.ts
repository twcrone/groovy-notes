import {OnInit} from 'angular2/core';
import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Http, HTTP_PROVIDERS} from 'angular2/http'

@Component({
    selector: 'my-app',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'app/app.component.html',
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit { 
    public heroes: Hero[];
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    
    http: Http;
    
    constructor(http: Http) {
        this.http = http; 
    }
    
    onSelect(hero: Hero) { this.selectedHero = hero; }
    
    getHeroes() {
       console.log('Getting notes dude...');
       var observable = this.http.get('/api/notes');
       observable.subscribe(resp => this.heroes = resp.json());
    }
    
    ngOnInit() {
         this.getHeroes();
    }
}

