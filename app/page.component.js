"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var PageComponent = (function () {
    function PageComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.path = params['path'];
            _this.page = window["pages"].find(function (page) { return _this.path == page.path; });
            console.log(_this.path);
            console.log(_this.page);
        });
    };
    PageComponent = __decorate([
        core_1.Component({
            selector: 'page',
            template: "\n    <topTool></topTool>\n    <my-nav></my-nav>\n       <ul>\n           <li *ngFor=\"let part of page.parts \">\n                 <div [ngSwitch]=\"part.part\">\n                    <banner *ngSwitchCase=\" 'Banner' \" [banner]=\"part\"></banner>\n                    <show-case *ngSwitchCase=\" 'ShowCase' \"></show-case>\n                 </div>\n           </li>\n       <ul>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], PageComponent);
    return PageComponent;
}());
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.component.js.map