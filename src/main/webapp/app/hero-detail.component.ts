import {Hero} from './hero';
import {Component} from 'angular2/core';
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    inputs: ['hero']
})
export class HeroDetailComponent {
    public hero: Hero;
}