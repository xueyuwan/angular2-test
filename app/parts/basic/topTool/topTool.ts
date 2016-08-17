import {Component} from '@angular/core'
@Component({
    selector:'topTool',
    templateUrl:'app/parts/basic/topTool/topTool.html'
})
export class topTool{
        saveWebsitData(){
            localStorage.setItem('websiteData',JSON.stringify(window['websiteData']));
        };
       

         clearWebsitData(){
            localStorage.setItem('websiteData','');
        }


}