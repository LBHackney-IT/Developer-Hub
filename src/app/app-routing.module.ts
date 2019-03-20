import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ApiChecklistComponent } from './components/pages/api-checklist/api-checklist.component';
import { ApiListComponent } from './components/pages/api-list/api-list.component';
import { ApiGuideComponent } from './components/pages/api-guide/api-guide.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ConfirmRegistrationComponent } from './components/pages/confirm-registration/confirm-registration.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { ConfirmationComponent } from './components/pages/confirmation/confirmation.component';
import { ApiPageComponent } from './components/pages/api-page/api-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TokenManagerComponent } from './components/pages/token-manager/token-manager.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './components/pages/admin/admin.component';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { DocumentationComponent } from './components/pages/documentation/documentation.component';
import { ApiFormComponent } from './components/partials/api-form/api-form.component';
import { SwaggerEndpointPageComponent } from './components/pages/swagger-endpoint-page/swagger-endpoint-page.component';
import { AdminGuard } from './guards/admin.guard';
import { GuestGuard } from './guards/guest.guard';
import { APIResolver } from './resolvers/api.resolver';


const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'api-list',  component: ApiListComponent, pathMatch: 'full'},
  {path: 'api/:id',  component: ApiPageComponent, pathMatch: 'full' , resolve: {api: APIResolver}},
  {path: 'api-guide',  component: ApiGuideComponent, pathMatch: 'full'},
  {path: 'api-checklist',  component: ApiChecklistComponent, pathMatch: 'full'},
  {path: 'api-form/:id', component: ApiFormComponent, pathMatch: 'full', canActivate: [AuthGuard, AdminGuard]},
  {path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [GuestGuard]},
  {path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [GuestGuard]},
  {path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full', canActivate: [GuestGuard]},
  {path: 'confirm-registration', component: ConfirmRegistrationComponent, pathMatch: 'full', canActivate: [GuestGuard]},
  {path: 'change-password', component: ChangePasswordComponent, pathMatch: 'full'},
  {path: 'confirmation/:type', component: ConfirmationComponent, pathMatch: 'full'},
  {path: 'key-manager', component: TokenManagerComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, pathMatch: 'full', canActivate: [AuthGuard, AdminGuard]},
  {path: 'documentation', component: DocumentationComponent, pathMatch: 'full'},
  {path: ':apiID/endpoints/:endpointID', component: SwaggerEndpointPageComponent, pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
