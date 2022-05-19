import { Component, OnInit } from '@angular/core';
import { CustomService } from 'src/app/services/custom.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  page_bookings: any[];
  lenguage: string;
  language_page: number;
  datosUsuario: any;
  // new
  actualizar_datos: boolean;
  mostrar_datos: boolean;

  actualizar_password: boolean;
  mostrar_password: boolean;  

  constructor(private _customservice: CustomService) { 

  }

  ngOnInit(): void {
    this.actualizar_datos = false;
    this.mostrar_datos = true;
    
    this.actualizar_password = false;
    this.mostrar_password = true;
    
    this.page_bookings = [
      {
        titulo: "My profile",
        subtitulo: "Personal information",
        label_titulo1: "Personal information",
        label_titulo2: "Password",

        label_asunto: "Message Subject",
        label_mensaje: "Message",
        label_guardar: "Save",
        label_atras: "Cancel",
      },
      {
        titulo: "Mi Perfil",
        subtitulo: "Información personal",
        label_titulo1: "Datos Personales",
        label_titulo2: "Contraseña",
        label_asunto: "Asunto",
        label_mensaje: "Message",
        label_guardar: "Guardar",

      }
    ];
    this.lenguage = 'en';
    this.language_page = this.lenguage == "en" ? 0 : 1;
    this.datosUsuario = JSON.parse(localStorage.getItem('infoauth'));
  }

  actualizar() {    
    var data = {
      "name": this.datosUsuario.name,
      "lastname": this.datosUsuario.lastName,
      "phone": this.datosUsuario.telephone
    };

    this._customservice.setProfile(data).subscribe((res: any) => {
      if (res) {
        this.mostrar_datos = true;
        this.actualizar_datos = false;

        Swal.fire('Updated', 'Profile was updated', 'success');
      }
    });
  }
  
  password() {    
    var data = {
      current: this.datosUsuario.password1,
      password: this.datosUsuario.password2,
      confirm: this.datosUsuario.password3,
    };

    this._customservice.setChangePassword(data).subscribe((res: any) => {
      if (res) {
        this.mostrar_password = true;
        this.actualizar_password = false;

        Swal.fire('Updated', 'Password was updated', 'success');
      }
    });
  }

}
