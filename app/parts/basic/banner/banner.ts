import {Component,Input,OnInit} from '@angular/core';

@Component({
    selector:'banner',
    templateUrl:'app/parts/basic/banner/banner.html'

})


export class BannerComponent implements OnInit{
  @Input()
  banner;

  ngOnInit(){

   
  }

}