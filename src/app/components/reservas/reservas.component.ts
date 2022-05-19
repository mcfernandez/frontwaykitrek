import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  antadults: number = 1;
  cantchildrens: number = 0;
  date: { year: number, month: number };
  //booleans view
  viewop1: boolean = true;
  viewop2: boolean = false;
  viewop3: boolean = false;

  datos: any

  inlineOptions = {

    minDate: new Date(),
    showWeeks: true
  };
  title = 'appBootstrap';
  dia_selecionado: any;
  language_page: any;
  Hoy_anno: any;
  Hoy_mes: any;
  Hoy_dia: any;
  localeString: string = 'en';
  viewDate: any;
  booking_list: any[];
  reservas: number = 0;
  lenguage: string;
  page:any;
  constructor(private _router: Router, private _bookings: DetailService) { }

  ngOnInit(): void {
    this.page = [
      {
        titulo: "My Reservations",
        titulo2: "My Reservations",
        labelFechaViaje: "Travel date",
        labelFechaModificacion: "Date of purchase",
        labelTipo: "Type of Service",
        labelCategoria:"Category",
        labelPasajeros: "Passenger",
        labelTotal: "Total",
        labelPendiente: "Outstanding",
        textwelcolme: "You don't have any reservations. If you want to book any of our tours, enter our tour list.",
        button:"Booking",
      },
      {
        titulo: "Mis reservación",
        titulo2: "Mis reservación",
        labelFechaViaje: "Fecha del Viaje",
        labelFechaModificacion: "Fecha de Modificación",
        labelTipo: "Tipo",
        labelCategoria: "Categoria",
        labelPasajeros: "Pasajero",
        labelTotal: "Total",
        labelPendiente: "Pendiente",
        textwelcolme: "You don't have any reservations. If you want to book any of our tours, enter our tour list.",
        button:"Booking",
      }
    ];
    this.lenguage = localStorage.getItem('lenguage');
    this.language_page = this.lenguage == "en" ? 0 : 1;
    // this.datosUsuario = JSON.parse(localStorage.getItem('infoauth'));
    this.getListBooking();
  }


  detalles(code){
    this._router.navigate([`/main/booking/detail/${code}`]);
  }
  getListBooking() {
    this._bookings.getList().subscribe((value: any) => {
      if (value) {
        this.booking_list = value;
        this.reservas = this.booking_list.length;
      }
    })
  }
  getCategory(id){
    //api     tour/booking/list    
    let cMpichu: string = "01c24891-7f92-eb11-ab1b-40ec994df7b4";
    if (id == cMpichu )
        return "Hotel's Category"
    else
        return "Language"
  }
}
