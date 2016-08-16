//main.ts 启动应用程序
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
window['$'].ajax(
    {
        methond:'GET',
        url:'web-site.json',
        success:function(data){
            window['websiteData']=data;
            window['pages']= data.pages;
            window['nav']=data.nav;
            platformBrowserDynamic().bootstrapModule(AppModule);
        }
}
);