import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

///Banner//

import { FieldManagementComponent } from './pages/field-management/field-management.component';
import { LiftStatusComponent } from './pages/lift-status/lift-status.component';
import { ManageUserDetailsComponent } from './pages/manage-user-details/manage-user-details.component';
import { ProjectLayoutsComponent } from './pages/project-layouts/project-layouts.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:name', component: DashboardComponent },

  ///Master ////
  /////////Banners//////

  { path: 'field_management', component: FieldManagementComponent },
  { path: 'user-type', component: UserTypeComponent },
  { path: 'project-layouts', component: ProjectLayoutsComponent },
  { path: 'lift-status', component: LiftStatusComponent },
  { path: 'manage-user', component: ManageUserDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
