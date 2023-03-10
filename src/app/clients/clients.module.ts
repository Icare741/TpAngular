import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './page-add-client/page-add-client.component';
import { PageEditClientComponent } from './page-edit-client/page-edit-client.component';



@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientComponent,
    PageEditClientComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientRoutingModule,
  ]
})
export class ClientsModule { }
