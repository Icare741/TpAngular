import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';



@NgModule({
  declarations: [
    TemplateComponent
  ],
  exports: [
    TemplateComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TemplatesModule { }
