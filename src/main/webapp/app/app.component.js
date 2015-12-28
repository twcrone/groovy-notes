System.register(['angular2/core', './hero-detail.component', './hero.service', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, hero_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    this.title = 'Tour of Heroes';
                    this.http = http;
                }
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    console.log('Getting notes dude...');
                    var observable = this.http.get('/api/notes');
                    observable.subscribe(function (resp) { return _this.heroes = resp.json(); });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/app.component.html',
                        styles: ["\n  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n  .heroes .badge {\n    font-size: small;\n    color: white;\n    padding: 0.1em 0.7em;\n    background-color: #369;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -1px;\n  }\n  .selected { background-color: #EEE; color: #369; }\n"],
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        providers: [hero_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map