import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './clients/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './clients/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './clients/page-list-clients/page-list-clients.component';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  {path: 'login', component: PageSignInComponent},
  {path: 'enregistrer', component: PageSignUpComponent},
  {path: 'mot de passe perdu', component: PageForgotPasswordComponent},
  {path: 'réinitialisation', component: PageSignUpComponent},
  {path: 'client', component: PageListClientsComponent},
  {path: 'Edition du client', component: PageEditClientComponent},
  {path: 'Ajouter un client', component: PageAddClientComponent},

  {path: 'orders', loadChildren: () => import('./orders/orders.module').then((module) => module.OrdersModule)},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
