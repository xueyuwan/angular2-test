

import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './parts/sign/sign-in/sign-in';
import {PageComponent} from './page.component'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: "/sign-in",
    pathMatch: "full",
  //所有找不到的或空页面都跳转到sign-in
  },
  {
    path: 'sign-in',
    component: SignInComponent
  //sign-in加载SignInComponent组件

  },
  {
    path: ':path',
    component: PageComponent,
    pathMatch: "full",
    // 所有一级导航封装成path,加载PageComponent组件

  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
