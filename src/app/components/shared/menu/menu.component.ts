import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/Authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: { modulo: string; titulo: string; estado: boolean; icono: string; url: string; id: string; corp: string; opciones: { titulo: string; url: string; icono: string; estado: boolean; id: string; }[]; }[];
  lenguage: any;
  datosUsuario: any;

  constructor(private _activateroute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.menus = [
      {
        "modulo": "serme",
        "titulo": "My reservations",
        "url": "/main/booking",
        "estado": true,
        "icono": "fas fa-plane",
        "id": "1",
        "corp": "0",
        "opciones": []
      },
      {
        "modulo": "serme",
        "titulo": "Incidents",
        "url": "/main/incidents",
        "estado": true,
        "icono": "fas fa-question",
        "id": "1",
        "corp": "0",
        "opciones": []
      },
      {
        "modulo": "serme",
        "titulo": "Profile",
        "url": "/main/profile",
        "estado": true,
        "icono": "fas fa-user",
        "id": "1",
        "corp": "0",
        "opciones": []
      },
      // {
      //   "modulo": "serme",
      //   "titulo": "Error",
      //   "url": "/main/error",
      //   "estado": true,
      //   "icono": "fas fa-edit",
      //   "id": "1",
      //   "opciones": []
      // },
      // {
      //   "modulo": "serme",
      //   "titulo": "Tours",
      //   "url": "/main/tours",
      //   "estado": true,
      //   "icono": "fas fa-globe",
      //   "id": "1",
      //   "opciones": []
      // },
    ]
    // console.log(this._activateroute);

    // this._activateroute.params.subscribe(params => {
    //   this.lenguage = params['lenguage'];

    // });
    this.datosUsuario = JSON.parse(localStorage.getItem('infoauth'));

  }


}
