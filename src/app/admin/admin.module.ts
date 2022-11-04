import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminSidebarComponent } from './component/admin-sidebar/admin-sidebar.component';


import { HttpClientModule } from '@angular/common/http';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';




import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';

import {MultiSelectModule} from 'primeng/multiselect';

import {TabViewModule} from 'primeng/tabview';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { FilterPipeModule } from 'ngx-filter-pipe';


import { NgOtpInputModule } from 'ng-otp-input'
import {CheckboxModule} from 'primeng/checkbox';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { FieldManagementComponent } from './pages/field-management/field-management.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';
import { ProjectLayoutsComponent } from './pages/project-layouts/project-layouts.component';
import { LiftStatusComponent } from './pages/lift-status/lift-status.component';
import { AppMaterialModules } from '../material.module';
import { ManageUserDetailsComponent } from './pages/manage-user-details/manage-user-details.component';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSidebarComponent,
    DashboardComponent,
    FieldManagementComponent,
    UserTypeComponent,
    ProjectLayoutsComponent,
    LiftStatusComponent,
    ManageUserDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatDialogModule,
    DialogModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    AutocompleteLibModule,
    Ng2SearchPipeModule,
    TableModule,
    FileUploadModule,
    TooltipModule,
    MultiSelectModule,
    TabViewModule,
    NgOtpInputModule,
    CheckboxModule,AppMaterialModules,
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9sxe06VnCg13SIyxJjTxq0gd4vj4bA48'
    }),
    GooglePlaceModule,
    FilterPipeModule,
    ReactiveFormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    DatePipe
  ],
  exports: [
    AdminHeaderComponent,
    AdminSidebarComponent
  ]
})
export class AdminModule { }
