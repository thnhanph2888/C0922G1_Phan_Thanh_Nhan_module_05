import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarEditComponent } from './car/car-edit/car-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {NavigationComponent} from './common/navigation/navigation.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CarAddComponent } from './car/car-add/car-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
