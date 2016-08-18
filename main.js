"use strict";
//main.ts 启动应用程序,拿取数据
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
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
//# sourceMappingURL=main.js.map