System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MessageFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MessageFilterPipe = (function () {
                function MessageFilterPipe() {
                    this.filteredNotes = [];
                }
                MessageFilterPipe.prototype.transform = function (heroes, _a) {
                    var _this = this;
                    var text = _a[0];
                    this.filteredNotes.length = 0;
                    if (text == null) {
                        text = '';
                    }
                    if (heroes != null) {
                        var tmp = heroes.filter(function (note) { return note.message.indexOf(text) !== -1; });
                        tmp.forEach(function (element) {
                            _this.filteredNotes.push(element);
                        });
                    }
                    return this.filteredNotes;
                };
                MessageFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'messageFilter',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageFilterPipe);
                return MessageFilterPipe;
            })();
            exports_1("MessageFilterPipe", MessageFilterPipe);
        }
    }
});
//# sourceMappingURL=message-filter.pipe.js.map