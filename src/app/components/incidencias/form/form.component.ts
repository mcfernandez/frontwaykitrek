import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailService } from 'src/app/services/detail.service';
import { IncidentService } from 'src/app/services/incident.service';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  page: any[];
  lenguage: string;
  language_page: number;
  datosUsuario: any = {};
  incidendias_datos: any;
  incidendias_lista: any;
  Incident_list: any;
  mostrar_formulario: boolean = false;
  Tyes_list: any;
  status_list: any;
  name_incidencia: any;
  type_incidencia: any;
  status_incidencia: any;
  mensaje: any;
  booking_list: any;
  booking_incidencias: any;
  actualizar: boolean;
  id_incidencia: any;

  bookingId: any;
  booking_name: any;
  constructor(private _router: Router,private _incidentservice: IncidentService, private _bookings: DetailService, private _activateroute: ActivatedRoute, private location: Location ) { }

  ngOnInit(): void {

    this.actualizar = false;
    this.page = [
      {
        titulo: "Incidents",
        titulo2: "Incident",
        label_titulo: "Information to Register",
        label_nombre: "Subject",
        label_asunto: "Message Subject",
        label_mensaje: "Message",
        label_guardar: "Save",
        label_guardar2: "Update",

        // datos de la tabla
        label_nuevo: "Nev ",
        label_lista: "List Incident",
        label_atras: "Cancel",
        seleccionar: "Choose the type of request",

        label_fecha: "Date",
        label_descripcion: "Booking",
        label_estado: "Status",
      },
      {
        titulo: "Incidencias",
        titulo2: "Incidencia",
        label_titulo: "Información a Registrar",
        label_nombre: "Titulo",
        label_asunto: "Asunto",
        label_mensaje: "Mensaje",
        label_guardar: "Guardar",
        label_guardar2: "Actualizar",

        label_nuevo: "Nueva",
        label_lista: "Lista Incidencias",
        label_atras: "Cancelar",
        seleccionar: "Seleccionar",

        label_fecha: "Fecha",
        label_descripcion: "Reserva",
        label_estado: "Estado",
      }
    ];
    this.lenguage = localStorage.getItem('lenguage');
    this.language_page = this.lenguage == "en" ? 0 : 1;
    this.datosUsuario = JSON.parse(localStorage.getItem('infoauth'));



    // let url = window.location.href;
    // this.bookingId = url.split("=")[1];
    this._activateroute.params.subscribe(params => {
      // this.getListBooking();
      setTimeout(() => {
        this.booking_incidencias = params['tour'];
        this.type_incidencia = params['type']
        this.booking_name = params['name']
      }, 1000);

      // alert(this.type_incidencia);
      this.getListTyes();
      this.getListStatus();
      // this.limpiar();
      this.searchIncidendecias();
    })
    // if (this.bookingId != undefined && this.bookingId != null) {
    //   this.bookingId = this.bookingId.split("&")[0];
    //   this.mostrar_formulario = true;
    //   this.booking_incidencias = this.bookingId;
    //   this.type_incidencia = url.split("=")[2];
    // } else {
    //   this.booking_incidencias = null;
    //   this.type_incidencia = null;
    //   this.mostrar_formulario = false;
    //   // window.location.reload()

    // }



  }
  searchIncidendecias() {
    Swal.fire({
      allowEnterKey: false,
      stopKeydownPropagation: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })
    this._incidentservice.getListByCurrentUser().subscribe((value: any) => {
      Swal.close();
      if (value) {
        this.Incident_list = value;
      }
    })
  }
  getListTyes() {
    this._incidentservice.getListTyes().subscribe((value: any) => {
      if (value) {
        this.Tyes_list = value;
      }
    })
  }
  getListStatus() {
    this._incidentservice.getListStatus().subscribe((value: any) => {
      if (value) {
        this.status_list = value;
      }
    })
  }
  name_status(id_status) {
    var dato = this.status_list.find(ds => ds.value == id_status);
    if (dato == undefined) {
      return ""
    } else {
      return dato.label
    }

  }
  color_status(id_status) {
    let color = '';
    switch (id_status) {
      case '3de49d99-478f-4a36-9f32-e3b517ee8842':
        color = "bg-primary";
        break;
      case '3070e9ba-b75a-407b-8cb7-2adbefba90d9':
        color = "bg-main";
        break;

      default:
        color = "bg-gris";
        break;
    }
    return color;
  }
  getListBooking() {
    this._bookings.getList().subscribe((value: any) => {
      if (value) {
        this.booking_list = value;
      }
    })
  }
  save() {
    if (this.type_incidencia != '7a9f172a-58f4-4cb4-9c2d-a5b2b07ce10c') {
      var dato = this.Tyes_list.find(ds => ds.value == this.type_incidencia);
      if (dato == undefined) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          allowEnterKey: false,
          text: "Please Complete All Fields"
        }).then((result) => {
        })
      } else {
        this.name_incidencia = dato.label;
      }
    } else {

      if ((this.name_incidencia == null) || (this.name_incidencia == undefined) || (this.name_incidencia == '')) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          allowEnterKey: false,
          text: "Please Complete All Fields"
        }).then((result) => {
        })
        return;
      }
    }
    var data = {
      "name": this.name_incidencia,
      "description": this.mensaje,
      "typeId": this.type_incidencia,
      "statusId": "3de49d99-478f-4a36-9f32-e3b517ee8842",
      "bookingId": this.booking_incidencias
    }
    Swal.fire({
      allowEnterKey: false,
      stopKeydownPropagation: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })
    this._incidentservice.postIncident(data).subscribe((res: any) => {
      console.log(res);
      if (res) {
        Swal.close();
        Swal.fire(
          'Creada!',
          'Su incidencia ha sido Creada con Exito.',
          'success'
        )
        this.limpiar();
        setTimeout(() => {
          this._router.navigate(['/main/incidents']);
        }, 1000);


        // this.mostrar_formulario = false;
        // this.searchIncidendecias();
      }
    });
  }
  actualizar_data() {
    var data = {
      "typeId": this.type_incidencia,
      "statusId": this.status_incidencia,
      "adviserId": null
    }
    this._incidentservice.putIncident(this.id_incidencia, data).subscribe((res: any) => {
      console.log(res);
      if (res) {
        Swal.fire(
          'Updated!',
          'Your issue has been Successfully Updated.',
          'success'
        )
        this.limpiar();
        this.mostrar_formulario = false;
        this.searchIncidendecias();
      }
    });

  }

  limpiar() {
    this.name_incidencia = "";
    this.mensaje = "";
    this.type_incidencia = 0;
    this.status_incidencia = 0;
    this.booking_incidencias = null;

  }
  limpiar2() {
    this.location.back();
  }
  delete(inc) {
    Swal.fire({
      title: `¿Be sure to Delete the Incident ${inc.name}?`,
      // text: inc.name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete Incident!'
    }).then((result) => {
      if (result.isConfirmed) {
        let id = inc.id
        this._incidentservice.deleteInciden(id).subscribe((value: any) => {
          if (value) {
            Swal.fire(
              'Delete!',
              'Your issue has been successfully removed.',
              'success'
            )
            this.searchIncidendecias();

          }
        })

      }
    })
  }
  editar(inc) {
    this.name_incidencia = inc.name;
    this.mensaje = inc.description;
    this.type_incidencia = inc.typeId;
    this.status_incidencia = inc.statusId;
    this.booking_incidencias = inc.bookingId;
    this.mostrar_formulario = true;
    this.id_incidencia = inc.id;
    this.actualizar = true;
  }
  procesar(inc) {
    Swal.fire({
      title: `¿You are sure to change status to Incident ${inc.name}?`,
      // text: inc.name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Change Status Incident!'
    }).then((result) => {
      if (result.isConfirmed) {
        let id = inc.id
        this._incidentservice.putIncidentChangeStatus(id, "").subscribe((value: any) => {
          if (value) {
            Swal.fire(
              'Status change!',
              'Your issue has changed status successfully.',
              'success'
            )
            this.searchIncidendecias();

          }
        })

      }
    })
  }
}
