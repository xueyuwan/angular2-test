import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <router-outlet> </router-outlet>
    <my-nav></my-nav>
    <banner></banner>
    <show-case><show-case>
    `
    
})
export class AppComponent implements OnInit {
    ngOnInit(){
    }
}
