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
var app_service_1 = require('../../../app.service');
var topTool = (function () {
    function topTool(viewContainerRef, appService, router) {
        var path = router.url.replace('/', '');
        this.page = appService.getPageParts(path);
    }
    // 保存网站数据
    topTool.prototype.saveWebsitData = function () {
        localStorage.setItem('websiteData', JSON.stringify(window['websiteData']));
    };
    ;
    // 清除缓存
    topTool.prototype.clearWebsitData = function () {
        localStorage.setItem('websiteData', '');
    };
    // 组件上移
    topTool.prototype.upPart = function (part) {
        var index = this.page.parts.indexOf(part);
        if (index !== 0) {
            var preElement = this.page.parts[index - 1];
            this.page.parts[index] = preElement;
            this.page.parts[index - 1] = part;
        }
    };
    // 组件下移
    topTool.prototype.downPart = function (part) {
        var index = this.page.parts.indexOf(part);
        var partLength = this.page.parts.length - 1;
        if (index !== partLength) {
            var nextElement = this.page.parts[index + 1];
            this.page.parts[index] = nextElement;
            this.page.parts[index + 1] = part;
        }
    };
    //删除组件
    topTool.prototype.deletePart = function (part) {
        var index = this.page.parts.indexOf(part);
        var after = this.page.parts.slice(index + 1);
        var before = this.page.parts.slice(0, index);
        this.page.parts = before.concat(after);
    };
    topTool = __decorate([
        core_1.Component({
            selector: 'topTool',
            templateUrl: 'app/parts/basic/topTool/topTool.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, app_service_1.AppService, router_1.Router])
    ], topTool);
    return topTool;
}());
exports.topTool = topTool;
//# sourceMappingURL=topTool.js.map