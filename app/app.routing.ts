

import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './parts/sign/sign-in/sign-in';
import{PageComponent} from './page.component'

const appRoutes: Routes = [
  {
    path:'',
    redirectTo:"/sign-in",
     pathMatch:"full",
    
  },
  { path: 'sign-in', 
  component:SignInComponent },
  {
    path: '**', 
    component:PageComponent

  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
