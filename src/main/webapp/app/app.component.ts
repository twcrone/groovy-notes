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
    styles:[`
  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
  .heroes .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
  }
  .selected { background-color: #EEE; color: #369; }
`],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit { 
    public heroes: Hero[];
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    
    constructor(private _heroService: HeroService) { }
    
    onSelect(hero: Hero) { this.selectedHero = hero; }
    
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    ngOnInit() {
        this.getHeroes();
    }
}

