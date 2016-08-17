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
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var topTool = (function () {
    function topTool() {
    }
    topTool.prototype.saveWebsitData = function () {
        localStorage.setItem('websiteData', JSON.stringify(window['websiteData']));
    };
    ;
    topTool.prototype.clearWebsitData = function () {
        localStorage.setItem('websiteData', '');
    };
    topTool.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    ;
    topTool = __decorate([
        core_1.Component({
            selector: 'topTool',
            directives: [ng2_bootstrap_1.TAB_DIRECTIVES, common_1.CORE_DIRECTIVES],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: 'app/parts/basic/topTool/topTool.html'
        }), 
        __metadata('design:paramtypes', [])
    ], topTool);
    return topTool;
}());
exports.topTool = topTool;
//# sourceMappingURL=topTool.js.map