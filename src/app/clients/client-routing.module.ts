import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { PageEditClientComponent } from './page-edit-client/page-edit-client.component';
import { PageAddClientComponent } from './page-add-client/page-add-client.component';



const routes: Routes = [
  {path: 'client', component: PageListClientsComponent},
  {path: 'editionduclient', component: PageEditClientComponent},
  {path: 'ajouterunclient', component: PageAddClientComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule],
})
export class ClientRoutingModule { }
