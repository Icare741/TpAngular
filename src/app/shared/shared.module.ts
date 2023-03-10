import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [],
  exports: [
    IconsModule,
    TemplatesModule,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
