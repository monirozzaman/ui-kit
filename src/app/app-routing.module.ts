import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './componant/auth/login/login.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';
import {SiteHomeComponent} from './componant/site-home/site-home.component';
import {DashboardComponent} from './componant/dashboard/dashboard.component';
import {AuthGuard} from './guard/auth.guard';
import {LogoutComponent} from './componant/auth/logout/logout.component';
import {NgModule} from '@angular/core';
import {OrgListComponent} from './componant/user-management/org/org-list/org-list.component';
import {TenantListComponent} from './componant/user-management/tenant/tenant-list/tenant-list.component';
import {UserListComponent} from './componant/user-management/user/user-list/user-list.component';
import {CreateOrgComponent} from './componant/user-management/org/create-org/create-org.component';
import {CreateTenantComponent} from './componant/user-management/tenant/create-tenant/create-tenant.component';
import {CreateUserComponent} from './componant/user-management/user/create-user/create-user.component';
import {CalendarComponent} from './componant/dentist-point/calendar/calendar.component';
import {CreatePrescriptionComponent} from './componant/dentist-point/create-prescription/create-prescription.component';

const routes: Routes = [

  // Site routes
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: SiteHomeComponent, pathMatch: 'full' }
    ]
  },

  // App routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
      { path: 'orgs', component: OrgListComponent, canActivate: [ AuthGuard ] },
      { path: 'orgs/create', component: CreateOrgComponent, canActivate: [ AuthGuard ] },
      { path: 'orgs/:id/tenants', component: TenantListComponent, canActivate: [ AuthGuard ] },
      { path: 'orgs/:id/tenants/create', component: CreateTenantComponent, canActivate: [ AuthGuard ] },
      { path: 'orgs/:id/tenants/:tid/users', component: UserListComponent, canActivate: [ AuthGuard ] },
      { path: 'orgs/:id/tenants/:tid/users/create', component: CreateUserComponent, canActivate: [AuthGuard] },
      { path: 'doctors/calendar-view', component: CalendarComponent, canActivate: [AuthGuard] },
      { path: 'doctors/create-prescription', component: CreatePrescriptionComponent, canActivate: [AuthGuard] }
    ]
  },

  // No layout routes
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }

