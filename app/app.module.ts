//app.module.ts
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
@NgModule({
    imports:[CommonModule,BrowserModule,FormsModule],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}