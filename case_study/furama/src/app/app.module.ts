import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityAddComponent } from './facility/facility-add/facility-add.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractAddComponent } from './contract/contract-add/contract-add.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    FacilityListComponent,
    FacilityAddComponent,
    FacilityEditComponent,
    ContractListComponent,
    ContractAddComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
