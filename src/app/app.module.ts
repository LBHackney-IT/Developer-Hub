import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { PhaseBannerComponent } from './components/partials/phase-banner/phase-banner.component';
import { SideNavbarComponent } from './components/partials/side-navbar/side-navbar.component';
import { ApiListComponent } from './components/pages/api-list/api-list.component';
import { ApiItemComponent } from './components/partials/api-item/api-item.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ApiChecklistComponent } from './components/pages/api-checklist/api-checklist.component';
import { ApiGuideComponent } from './components/pages/api-guide/api-guide.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { ConfirmRegistrationComponent } from './components/pages/confirm-registration/confirm-registration.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ConfirmationComponent } from './components/pages/confirmation/confirmation.component';
import { ApiPageComponent } from './components/pages/api-page/api-page.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TokenManagerComponent } from './components/pages/token-manager/token-manager.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './components/partials/alert/alert.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { ApiKeyService } from './services/apiKey.service';
import { ApiService } from './services/api.service';
import { AdminComponent } from './components/pages/admin/admin.component';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { ClickRevealComponent } from './components/partials/click-reveal/click-reveal.component';
import { LambdaInterceptor } from './interceptors/http.interceptor';
import { ColumnLayoutComponent } from './components/partials/column-layout/column-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhaseBannerComponent,
    SideNavbarComponent,
    ApiListComponent,
    ApiItemComponent,
    HomeComponent,
    ApiChecklistComponent,
    ApiGuideComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ConfirmRegistrationComponent,
    ChangePasswordComponent,
    ConfirmationComponent,
    ApiPageComponent,
    NotFoundComponent,
    TokenManagerComponent,
    AlertComponent,
    FooterComponent,
    AdminComponent,
    LogoutComponent,
    ClickRevealComponent,
    ColumnLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiKeyService,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: LambdaInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
