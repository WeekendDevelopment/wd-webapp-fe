import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login-page/login-page-module').then((m)=> m.LoginPageModule)
  },{
    path: '',
    loadChildren: () => import('./login-page/login-page-module').then((m)=> m.LoginPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}