//app.module.ts
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SignInComponent} from './parts/index';
import {routing} from './app.routing';
import {MyNavComponent,BannerComponent,ShowcaseComponent} from './parts/index';
@NgModule({
    imports:[CommonModule,BrowserModule,FormsModule,routing],
    declarations:[AppComponent,SignInComponent,MyNavComponent,BannerComponent,ShowcaseComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}