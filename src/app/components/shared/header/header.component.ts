import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/Authentication.service';
import { CorporativeService } from 'src/app/services/Corporative.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lenguage: any;
  language_page: number;
  page_bookings: any[];
  datosUsuario: any;
  listTour: any[];

  constructor(private _router: Router,
    private _activateroute: ActivatedRoute,
    private _authenticationservice: AuthenticationService, private _corp: CorporativeService) { }

  ngOnInit(): void {
    // this.selecionarIdioma('es');
    this.lenguage = localStorage.setItem('lenguage', "en");

    this.page_bookings = [
      {
        cerrar_sesion: "Sign off",
        namecompany: "Company",
        createreserve: "Create Reserve"
      },
      {
        cerrar_sesion: "Cerrar sesión",
        namecompany: "Empresa",
        createreserve: "Crear Reserva"
      }
    ];
    // this._activateroute.params.subscribe(params => {

    //   this.lenguage = params['lenguage'];
    //   var caracter = this.lenguage;
    //   caracter = caracter.replace(/\-/g, '');
    //   // caracter = caracter.replace(/[a-zA-Z]/g, '');
    //   caracter = caracter.replace(/[0-9]/g, '');
    //   caracter = caracter.replace(/\./g, '');
    //   this.lenguage = caracter;
    //   this.language_page = this.lenguage == "en" ? 0 : 1;

    // });
    this.lenguage = localStorage.getItem('lenguage');
    this.language_page = this.lenguage == "en" ? 0 : 1;
    // this.lenguage =localStorage.setItem('miGato', 'lenguage');
    // debugger;
    this.datosUsuario = JSON.parse(localStorage.getItem('infoauth'));
    if (this.datosUsuario==null){
      localStorage.clear();
      this._router.navigate(['/auth/login']);
    }

    if (this.datosUsuario.corporateClientId != null) {
      this._corp.getListTour().subscribe((result: any[]) => {      
        this.listTour = result;
      })
    }
  }

  selecionarIdioma(lang) {
    this.lenguage = localStorage.setItem('lenguage', lang);
    window.location.reload()
  }

  cerrar(){
    this._authenticationservice.destroySession();
  }

  changeChangeRelatedTour(value: string) {
    if (value != "0") {
      if (this.datosUsuario.corporateClientId != null)
        this._router.navigate([`/corporative/${ value }`]);
      else
        this._router.navigate([`/booking/${ value }`]);
    }
  }
}
