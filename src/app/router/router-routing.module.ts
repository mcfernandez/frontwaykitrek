import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//import { AuthGuard } from './app/guards/auth.guard'
import { BookingsComponent } from '../pages/bookings/bookings.component';
import { CorporativeComponent } from '../pages/corporative/corporative.component';

import { LoginComponent } from '../pages/login/login.component';
import { MainComponent } from '../pages/main/main.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { IncidenciasComponent } from '../components/incidencias/incidencias.component';
import { FormComponent } from '../components/incidencias/form/form.component';
import { ReservasComponent } from '../components/reservas/reservas.component';
import { ToursComponent } from '../components/tours/tours.component';
import { DetailComponent } from '../components/reservas/detail/detail.component';
import { PaymentconfirmComponent } from '../pages/paymentconfirm/paymentconfirm.component';
import { Error404Component } from '../components/error404/error404.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'paymentconfirm', component: PaymentconfirmComponent },
  { path: 'login/:type', component: LoginComponent },
  { path: 'booking/:tour', component: BookingsComponent },
  { path: 'corporative/:tour', component: CorporativeComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'booking', component: ReservasComponent },
      // { path: 'error', component: Error404Component },
      { path: 'booking/detail/:reservationcode', component: DetailComponent },
      { path: 'incidents', component: IncidenciasComponent },
      { path: 'incidents/form/:tour/:type/:name', component: FormComponent },
      { path: 'profile', component: PerfilComponent },
      { path: 'tours', component: ToursComponent },
      
      // {
      //   path: 'buscar',
      //   loadChildren: './components/geosearch/geosearch.module#GeosearchModule'
      // },
      { path: '*', redirectTo: 'login', pathMatch: 'full' },
      // { path: '**', redirectTo: 'booking', pathMatch: 'full' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
