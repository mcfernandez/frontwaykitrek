import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import '@angular/localize/init'
//Routes
import { AppRoutingModule } from "./router/router-routing.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { CorporativeComponent } from './pages/corporative/corporative.component';

import { HeaderComponent } from './components/shared/header/header.component';

import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservasComponent } from './components/reservas/reservas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import {  HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/Authentication.service';
import { ToursComponent } from './components/tours/tours.component';
import { DetailComponent } from './components/reservas/detail/detail.component';
import { PaymentconfirmComponent } from './pages/paymentconfirm/paymentconfirm.component';
import { FormComponent } from './components/incidencias/form/form.component';
import { Error404Component } from './components/error404/error404.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http';


// Env
// import { environment } from '../environments/environment';
// import {  FakeApiService} from './core/_base/layout';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    BookingsComponent,
    CorporativeComponent,
    HeaderComponent,
    ReservasComponent,
    PerfilComponent,
    IncidenciasComponent,
    MenuComponent,
    ToursComponent,
    DetailComponent,
    PaymentconfirmComponent,
    FormComponent,
    Error404Component
  ],
  imports: [


    // HttpClientModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
