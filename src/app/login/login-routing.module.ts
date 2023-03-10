import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';

  const routes: Routes = [
  {path: 'logins', component: PageSignInComponent},
  {path: 'enregistrer', component: PageSignUpComponent},
  {path: 'motdepasseperdu', component: PageForgotPasswordComponent},
  {path: 'reinitialisation', component: PageSignUpComponent},
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule],
})
export class LoginRoutingModule { }
