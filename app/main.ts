//main.ts 启动应用程序``
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';


// 获取本地存储
var websiteData = localStorage.getItem('websiteData') ? JSON.parse(localStorage.getItem('websiteData')) : false;
console.log(websiteData);

// 从本地拿数据或从josn请求数据
if (websiteData) {
    window['websiteData'] = websiteData;
    window['pages'] = websiteData.pages;
    window['nav'] = websiteData.nav;
    platformBrowserDynamic().bootstrapModule(AppModule);

}
else {
    window['$'].ajax(
        {
            methond: 'GET',
            url: 'web-site.json',
            success: function (data) {
                window['websiteData'] = data;
                window['pages'] = data.pages;
                window['nav'] = data.nav;
                platformBrowserDynamic().bootstrapModule(AppModule);
            }
        }
    );
}