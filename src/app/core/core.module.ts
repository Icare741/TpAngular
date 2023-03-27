import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { LoginRoutingModule } from '../login/login-routing.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    UiModule,
    IconsModule,
    LoginModule,
    LoginRoutingModule,
    NavComponent,
    FooterComponent,
    HeaderComponent,



  ],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    HttpClientModule
  ]
})
export class CoreModule { }
