import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.modules';

//Components
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule ,
    RoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
