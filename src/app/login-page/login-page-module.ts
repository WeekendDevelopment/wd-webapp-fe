import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { LoginPageComponent } from './login-page.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
];
@NgModule({
  declarations: [LoginPageComponent],
  imports: [SharedModule, RouterModule.forChild(route)],
})
export class LoginPageModule {}
