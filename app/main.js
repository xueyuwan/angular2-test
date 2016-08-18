"use strict";
//main.ts 启动应用程序``
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
// 获取本地存储
var websiteData = localStorage.getItem('websiteData') ? JSON.parse(localStorage.getItem('websiteData')) : false;
console.log(websiteData);
// 从本地拿数据或从josn请求数据
if (websiteData) {
    window['websiteData'] = websiteData;
    window['pages'] = websiteData.pages;
    window['nav'] = websiteData.nav;
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
}
else {
    window['$'].ajax({
        methond: 'GET',
        url: 'web-site.json',
        success: function (data) {
            window['websiteData'] = data;
            window['pages'] = data.pages;
            window['nav'] = data.nav;
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    });
}
//# sourceMappingURL=main.js.map