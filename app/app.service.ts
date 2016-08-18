import {Injectable} from '@angular/core';


@Injectable()
export class AppService{
    getWebsiteData(){
        return window['websiteData'];
    }
    
    getNavData(){
        return window['nav'];
    }

    getPagesData(){
        return window['pages'];
    }
    
    getPageParts(path:string){
        return window['pages'].find(page=>page.path==path);
    }

}