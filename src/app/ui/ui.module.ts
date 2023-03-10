import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './layout1/ui.component';
import { Ui2Component } from './layout2/ui2.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UiComponent,
    Ui2Component
  ],
  exports: [
    UiComponent,
    Ui2Component,
  ],
  imports: [
    CommonModule,
    
  ]
})
export class UiModule { }
