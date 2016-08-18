import {Component,OnInit, OnChanges, OnDestroy} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from './app.service';
@Component({
   
    selector: 'page',
    template: `
    <topTool></topTool>
    <my-nav></my-nav>
       <ul>
           <li *ngFor="let part of page.parts ">
                 <div [ngSwitch]="part.part">
                    <banner *ngSwitchCase=" 'Banner' " [banner]="part"></banner>
                    <show-case *ngSwitchCase=" 'ShowCase' "></show-case>
                 </div>
           </li>
       <ul>
    `
     // 拿取页面的组件
})


export class PageComponent{

  path:string;
  page:any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private appService: AppService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.path = params['path'];
            this.page=window["pages"].find(page=>this.path==page.path);
            console.log('path'+this.path);
            console.log('page'+this.page)
        });
    }

}