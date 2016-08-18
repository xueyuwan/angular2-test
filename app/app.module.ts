//app.module.ts
import {NgModule,ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SignInComponent} from './parts/index';
import {routing} from './app.routing';
import {MyNavComponent,BannerComponent,ShowcaseComponent,topTool} from './parts/index';
import {AppService} from './app.service';
@NgModule({
    imports:[CommonModule,BrowserModule,FormsModule,routing],
    declarations:[AppComponent,SignInComponent,MyNavComponent,BannerComponent,ShowcaseComponent,topTool],
    bootstrap:[AppComponent],
    providers:[AppService,ViewContainerRef],
})
export class AppModule{}