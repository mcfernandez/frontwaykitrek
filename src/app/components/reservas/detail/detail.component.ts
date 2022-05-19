import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { BookingsService } from 'src/app/services/bookings.service';
import { DetailService } from 'src/app/services/detail.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
declare var $:any

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  reservationCode: string;
  page_detail: any[];
  lenguage: string;
  language_page: number;
  detalletours: any;


  total_passengers: number;
  total_Servicios_adicionales: number;
  paises: any;
  sex: any;
  montoPagar: number;
  datos_save: { bookingId: any; transactionKey: any; transactionId: any; };
  datosUsuario: any;
  mostrar_pago: boolean = true;
  ListAdditional: any;
  saveAdditional: any =[];
  termino_ingles: string;
  termino_espanol: string;
  total_otherTours: number;
  DocumentType: any;
  MaritalStatus: any;
  FoodPreference: any;
  TrekkingExperience: any;
  fecha_max: string;
  Hoy_anno: number;
  Hoy_annoExpiration: number;
  Hoy_mes: number;
  Hoy_dia: number;
  TravelPurpose: any;
  total_add: any;
  total_substract: any;
  total_payments: any;
  jobs: any;
  idpasajero: any;
  typePasajero: any;
  file:any;
  total_hotels: number;
  pasajero: any;
  clientId: any;
  total_buys: number;
  url_file: any;
  filename: string;
  mensaje_pagos: string;
  gateWayPayment: boolean;
  fecha_hoy: string;
  fecha_hoyExpiration: string;
  constructor(private _activateroute: ActivatedRoute,
    // config: NgbModalConfig, private modalService: NgbModal,
    private _bookingsservice: BookingsService,
    private _detail: DetailService,
    private _router: Router,
  ) {
    this.gateWayPayment = environment.gateWayPayment;
    // config.backdrop = false;
    // config.keyboard = false;
  }

  ngOnInit(): void {
    this.termino_ingles = "In this section are the terms and conditions."
    this.termino_espanol = "En esta sección van los terminos y condiciones"
    this.page_detail = [
      {
        label_solicitar:"Request",
        label_eliminarsa: "Remove Additional Services",
        label_agregarsa: "Add Additional Services",
        label_tituloAS: "Additional Services",
        label_agregarp: "Add passenger",
        label_Eliminarp: "Remove passenger",

        labelFechaViaje: "Travel Date",
        labelFechaCompra: "Purchase Date",
        labelTypo: "Type",

        labelMireservas: "My Reservations",
        labelFechaTour: "Tour Date",
        labelCategoria: "Tour Category",
        labelTipo: "Tour Type",
        labelPasajeros: "Passengers",
        labelTipo_pasajero: "Type Passenger",
        labelCantidad_pasajero: "Amount Passenger",
        labelTotal_pasajeros: "Total",
        labelServicios_incluidos: "Included Services",
        labelServicio: "Service",
        labelServicios_adicionales: "Remove Services",
        labelFecha_compra: "Purchase Date",
        labelProducto: "Product",
        labelCosto: "Cost",
        labelCantidad: "Quantity",
        labelTotal: "Total",
        labelPagar: "Pay",
        labelOtros_tours: "Another Tours",
        labelBalance_final: "Final Balance",
        labelFecha: "Date",
        labelDetalle: "Detail",
        labelComision: "Commission",
        labelMonto: "Amount",
        labelListado_Pasajeros: "List Of Passengers",
        labelNro: "Nro",
        labelNombre_apellido: "First Lastname",
        labelPasajero: "Passenger",
        labelDato_registrado: "Registered Data",
        labelResumen: "Summary",
        labelNro_tour: "Nro Tour",
        labelObservacion: "Observation",
        texto_eliminar: "To eliminate a service or a passenger, you must generate an INCIDENCE, indicating the subject, and the detail of said requirement. The sales advisor will contact you shortly to execute your request.",
        pregunta: "Are you sure you want to Delete?",
        terminos_eliminacion: "See Cancellation policies",
        label_si: "Yes",
        label_no: "Not",

        label_nombreNuevo: "Name",
        label_apellidoNuevo: "Surname",
        label_telefonoNuevo: "Telephone",
        label_fechaNacimientoNuevo: "Date of Birth",
        label_emailNuevo: "Email",
        label_contrasenaNuevo: "Password",
        label_paisNuevo: "Country",

        label_tituloterminoNuevo: "Booking Terms and Conditions",
        textoterminoNuevo: this.termino_ingles,
        labelClose: "Close",

        qe_labelCodigoReserva: "Bookings Code",
        qe_labelFechaViaje: "Travel date",
        qe_labelFechaModificacion: "Date of purchase",
        qe_labelTipo: "Type of Service ",
        qe_labelCategoria: "Category",
        qe_labelPasajeros: "Passenger",
        qe_labelTotal: "Total",
        qe_labelPendiente: "Outstanding",

        btn_agregar: "Add",
        btn_cancelar: "Cancel",
        labelObservation: "Observations",
      },
      {
        label_solicitar: "Request",
        label_eliminarsa: "Eliminar servicios adicionales",
        label_agregarsa: "Agregar Servicios Adicionales",
        label_agregarp: "Agregar Pasajero",
        label_Eliminarp: "Eliminar Pasajero",

        labelFechaViaje: "Fecha del viaje",
        labelFechaCompra: "Fecha de la compra",
        labelTypo: "Tipo ",

        labelMireservas: "Mi Reserva",
        labelFechaTour: "Fecha del Tour",
        labelCategoria: "Categoria del Tour",
        labelTipo: "Tipo del Tour",
        labelPasajeros: "Pasajeros",
        labelTipo_pasajero: "Tipo Pasajero",
        labelCantidad_pasajero: "Cantidad Pasajero",
        labelTotal_pasajeros: "Total",
        labelServicios_incluidos: "Servicios Incluidos",
        labelServicio: "Servicio",
        labelServicios_adicionales: "Servicios Adicionales",
        labelFecha_compra: "Fecha Compra",
        labelProducto: "Producto",
        labelCosto: "Costo",
        labelCantidad: "Cantidad",
        labelTotal: "Total",
        labelPagar: "Pagar",
        labelOtros_tours: "Otros tours",
        labelBalance_final: "Balance Final",
        labelFecha: "Fecha",
        labelDetalle: "Detalle",
        labelComision: "Comision",
        labelMonto: "Monto",
        labelListado_Pasajeros: "Listado de pasajeros",
        labelNro: "Nro",
        labelNombre_apellido: "Nombre apellido",
        labelPasajero: "Pasajero",
        labelDato_registrado: "Dato registrado",
        labelResumen: "Resumen",
        labelNro_tour: "Nro tour",
        labelObservacion: "Observación",
        texto_eliminar: "Para eliminar un servicio o un pasajero debe generar una INCIDENCIA, indicando el asunto, y el detalle de dicho reuqerimineto. El asesor de ventas en breve se comunicara con usted para ejecutar su requerimiento.",
        pregunta: "¿Estas seguro que quiere Eliminar?",
        terminos_eliminacion: "Ver Politicas de Cancelación",
        label_si: "Si",
        label_no: "No",
        label_nombreNuevo: "Nombre",
        label_apellidoNuevo: "Apellido",
        label_telefonoNuevo: "Telefono",
        label_fechaNacimientoNuevo: "Fecha de Nacimiento",
        label_emailNuevo: "Correo Electronico",
        label_contrasenaNuevo: "Contraseña",
        label_paisNuevo: "Pais",


        label_tituloterminoNuevo: "Términos y Condiciones",
        labelClose: "Cerrar",
        textoterminoNuevo: this.termino_espanol,


        qe_labelCodigoReserva: "Codigo de la Reservación",
        qe_labelFechaViaje: "Fecha del Viaje",
        qe_labelFechaModificacion: "Fecha de Modificación",
        qe_labelTipo: "Tipo",
        qe_labelCategoria: "Categoria",
        qe_labelPasajeros: "Pasajero",
        qe_labelTotal: "Total",
        qe_labelPendiente: "Pendiente",

        btn_agregar: "Agregar",
        btn_cancelar: "Cancelar",
        labelObservation: "Observaciones",
      }
    ];
    this.lenguage = localStorage.getItem('lenguage');
    this.Hoy_anno = new Date().getFullYear();
    this.Hoy_annoExpiration = new Date().getFullYear()+30;
    this.Hoy_mes = new Date().getMonth() + 1;
    this.Hoy_dia = new Date().getDate();
    
    this.fecha_max = (this.Hoy_anno - 17) + "-" + (this.Hoy_mes < 10 ? '0' + this.Hoy_mes : this.Hoy_mes) + "-" + (this.Hoy_dia < 10 ? '0' + this.Hoy_dia : this.Hoy_dia);
    this.fecha_hoy = this.Hoy_anno + "-" +(this.Hoy_mes < 10 ? '0' + this.Hoy_mes : this.Hoy_mes) + "-" + (this.Hoy_dia < 10 ? '0' + this.Hoy_dia : this.Hoy_dia);
    this.fecha_hoyExpiration = this.Hoy_annoExpiration + "-" +(this.Hoy_mes < 10 ? '0' + this.Hoy_mes : this.Hoy_mes) + "-" + (this.Hoy_dia < 10 ? '0' + this.Hoy_dia : this.Hoy_dia);

    this.language_page = this.lenguage == "en" ? 0 : 1;
    this.datosUsuario = JSON.parse(localStorage.getItem('infoauth'));
    this._activateroute.params.subscribe(params => {
      this.reservationCode = params['reservationcode'];
      Swal.fire({
        allowEnterKey: false,
        stopKeydownPropagation: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })
      this._detail.getListOne(this.reservationCode).subscribe((value: any) => {
        if (value) {
          Swal.close();
          this.detalletours = value;
          this.totales()
          this.searchCountry();
          this.searchOption();
          this.searchSAdditional();
          this.pasajero={
            nombre: "",
            apellido:"",
            pais:"",
            fechaNacimiento:"",
            tipoDocumento: "",
            documento: "",
            fechaExpedicion:"",
            email: "",
            phone: "",
            ocupacion: "",
            sex: "",
            maritalStatus: "",
            foodPreference: "",
            foodPreference2: "",
            travelPurpose: "",
            travelPurpose2: "",
            TrekkingExperience: "",
            TrekkingExperience2: "",
            allergies: "",
            medical: "",
            dateExpirationCard:""
          }
        }
      })

      // alert(this.reservationCode);
    })
  }

  listOne(){
    this._detail.getListOne(this.reservationCode).subscribe((value: any) => {
      if (value) {
        this.detalletours = value;
        this.totales();
      }
    })
  }

  //new
  getCategory(id){
    let cMpichu: string = "01c24891-7f92-eb11-ab1b-40ec994df7b4";
    if (id == cMpichu )
        return "Hotel's Category"
    else
        return "Language"
  }

  totales() {
    this.total_passengers = 0;
    this.total_Servicios_adicionales = 0;
    this.total_otherTours=0;
    this.total_add=0;
    this.total_substract=0;
    this.total_payments=0;
    this.total_hotels = 0;
    this.total_buys= 0;
    for (const iterator of this.detalletours.passanger) {
      this.total_passengers += iterator.total
    }
    for (const iterator of this.detalletours.additionalServices) {
      this.total_Servicios_adicionales += iterator.total
    }
    for (const iterator of this.detalletours.otherTours) {
      this.total_otherTours += iterator.total
    }
    for (const iterator of this.detalletours.paymentExtra.add) {
      this.total_add += iterator.total
    }
    for (const iterator of this.detalletours.paymentExtra.substract) {
      this.total_substract += iterator.total
    }
    for (const iterator of this.detalletours.payments) {
      this.total_payments += iterator.total
    }
    for (const iterator of this.detalletours.hotels) {
      this.total_hotels += iterator.total
    }
    for (const iterator of this.detalletours.buy) {
      this.total_buys += iterator.total
    }
  }
  searchCountry() {
    this._bookingsservice.getListCountry().subscribe((value: any) => {
      if (value) {
        this.paises = value;
      }
    })
  }
  searchOption() {
    this._detail.getListOption("sex").subscribe((value: any) => {
      if (value) {
        this.sex = value;
      }
    })
    this._detail.getListOption("DocumentType").subscribe((value: any) => {
      if (value) {
        this.DocumentType = value;
      }
    })
    this._detail.getListOption("MaritalStatus").subscribe((value: any) => {
      if (value) {
        this.MaritalStatus = value;
      }
    })
    this._detail.getListOption("FoodPreference").subscribe((value: any) => {
      if (value) {
        this.FoodPreference = value;
      }
    })
    this._detail.getListOption("TrekkingExperience").subscribe((value: any) => {
      if (value) {
        this.TrekkingExperience = value;
      }
    })
    this._detail.getListOption("TravelPurpose").subscribe((value: any) => {
      if (value) {
        this.TravelPurpose = value;
      }
    })
    this._detail.getListJobs().subscribe((value: any) => {
      if (value) {
        this.jobs = value;
      }
    })

  }

  searchSAdditional() {


    // /api/tour / { bookingId } / service / additional
    this._detail.getListAdditional(this.reservationCode).subscribe((value: any) => {
      if (value) {
        this.ListAdditional = value;
        console.log(this.ListAdditional)
        for (let index = 0; index < this.ListAdditional.normal.length; index++) {
          this.ListAdditional.normal[index].quantity = 0;
        }
        for (let index = 0; index < this.ListAdditional.istour.length; index++) {
          this.ListAdditional.istour[index].quantity = 0;
        }
      }



    })


  }
  onlyNumber(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
      }
      return true;
  }

  validarNumero(index, obj) {
    var valor = this.ListAdditional[obj][index].quantity + '';
    valor = valor.replace(/\-/g, '0');
    valor = valor.replace(/[a-zA-Z]/g, '0');
    valor = valor.replace(/[^0-9]/g, '0');
    valor = valor.replace(/\./g, '0');
    this.ListAdditional[obj][index].quantity = parseFloat(valor);
  }

  cambiar_cantidad(index, obj) {
    var dato = this.saveAdditional.find(ds => ds.serviceId == this.ListAdditional[obj][index].prices[0].id);
    if (dato == undefined) {
      if (this.ListAdditional[obj][index].quantity > 0) {
        this.saveAdditional.push({
          "serviceId": this.ListAdditional[obj][index].prices[0].id,
          "name": this.ListAdditional[obj][index].name,
          "quantity": this.ListAdditional[obj][index].quantity,
          "unitPrice": this.ListAdditional[obj][index].prices[0].value,
          "total": this.ListAdditional[obj][index].prices[0].value * this.ListAdditional[obj][index].quantity
        })
      }else{
        this.ListAdditional[obj][index].quantity = 0
      }
    } else {
      var index_selecionado = this.saveAdditional.indexOf(dato);
      if (this.ListAdditional[obj][index].quantity > 0) {
        this.saveAdditional[index_selecionado].quantity = this.ListAdditional[obj][index].quantity;
        this.saveAdditional[index_selecionado].total = this.ListAdditional[obj][index].prices[0].value * this.ListAdditional[obj][index].quantity;
      }else{
        this.saveAdditional.splice(index_selecionado, 1);
        this.ListAdditional[obj][index].quantity=0
      }

    }
    console.log(this.saveAdditional);
  }
  saveAddional(){
    if(this.saveAdditional.length>0){
      Swal.fire({
        allowEnterKey: false,
        stopKeydownPropagation: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })
      this._detail.postAddService(this.saveAdditional, this.reservationCode).subscribe((res: any) => {
        console.log(res);
        if (res) {
          Swal.close();
          Swal.fire(
            'Created!',
            'Additional services were Created Successfully.',
            'success'
          )
          this.searchSAdditional()
          this.saveAdditional = [];
          this.listOne();
        }
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "No Changes Are Registered"
      }).then((result) => {
      })
    }

  }
  setdate(date){
    var d,m,a;
    var fecha = date.split("/")
    d = fecha[1];
    m=Number(fecha[0])-1;
    a = fecha[2];
    let date2= new Date(a,m,d);
    var day = ("0" + date2.getDate()).slice(-2);
    var month = ("0" + (date2.getMonth() + 1)).slice(-2);
    return date2.getFullYear() + "-" + (month) + "-" + (day)
  }


  abrir_modal_pasajero(pasajero){
    this.filename ="";
    this.url_file=null;
    $('#filep').val('')
    this.typePasajero = pasajero.type
    this.idpasajero = pasajero.id;
    this.clientId = pasajero.clientId;
    if (this.clientId == undefined || this.clientId == null || this.clientId == '' ){
      this.pasajero = {
        nombre: "",
        apellido: "",
        pais: "",
        fechaNacimiento: "",
        tipoDocumento: "",
        documento: "",
        fechaExpedicion: "",
        email: "",
        phone: "",
        ocupacion: "",
        sex: "",
        maritalStatus: "",
        foodPreference: "",
        foodPreference2: "",
        travelPurpose: "",
        travelPurpose2: "",
        TrekkingExperience: "",
        TrekkingExperience2: "",
        allergies: "",
        medical: "",
        dateExpirationCard: ""
      }
      $("#pasajero").modal('show');
    }else{
      Swal.fire({
        allowEnterKey: false,
        stopKeydownPropagation: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })
      this._detail.getOneClient(this.clientId).subscribe((value: any) => {
        console.log(value);
        this.pasajero = {
          nombre: value.firstname,
          apellido: value.lastname,
          pais: value.countryid,
          fechaNacimiento: value.birthdateStr == null ? null :this.setdate(value.birthdateStr),
          tipoDocumento: value.documenttypeid,
          documento: value.documentnumber,
          fechaExpedicion: value.expirationDate==null?null:this.setdate(value.expirationDate),
          email: value.email,
          phone: value.mobilenumber,
          ocupacion: value.jobid,
          sex: value.sexid,
          maritalStatus: value.maritalstatusid,
          foodPreference: value.foodpreferencesid,
          foodPreference2: value.foodobservation,
          travelPurpose: value.travelpurposeid,
          travelPurpose2: value.travelpurposeid,
          TrekkingExperience: value.trekkingexperienceid,
          TrekkingExperience2: value.trekkingexperienceid,
          allergies: value.allergyobservation,
          medical: value.medicalrequirement,
          dateExpirationCard: value.dateExpirationCard==null?null:this.setdate(value.dateExpirationCard)
        }
        this.url_file = value.urlFile==null?null:environment.serve+value.urlFile;
        setTimeout(() => {
          Swal.close();
          $("#pasajero").modal('show');
        }, 2000);

      })
    }



  }
  openModal(id){
    $("#"+id).modal('show');
    this.mensaje_pagos="";
  }



  irIncidencia(tipo) {
    $(".modal").modal('hide');
    this._router.navigateByUrl(`/main/incidents/form/${this.reservationCode}/${tipo}/${this.detalletours.booking.code}`);
  }

  pagar_modal() {
    if ((this.montoPagar > 0) && (this.montoPagar <= this.detalletours.booking.debt)) {
      var dat = {
        "bookingId": this.reservationCode,
        "amount": this.montoPagar,
        "amountStr": ""+(this.montoPagar * 100)
      }
      this._detail.paymentAdd(dat).subscribe((value: any) => {
        this.mostrar_pago = false;
        this.datos_save = Object.assign({}, value);

        // alert(this.datos_save.bookingId);
        // debugger;
        setTimeout(() => {
          if (this.gateWayPayment==true){
            let element: HTMLElement = document.getElementById('prod') as HTMLElement;
            element.click()
          }else{
            let element: HTMLElement = document.getElementById('dev') as HTMLElement;
            element.click()
          }

        }, 500);

      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "The amount to pay is not valid"
      }).then((result) => {
      })
    }

  }

  saveEditPassanger(){

    if(
      (this.pasajero.nombre == null) || (this.pasajero.nombre == undefined) || (this.pasajero.nombre == "") ||
      (this.pasajero.apellido == null) || (this.pasajero.apellido == undefined) || (this.pasajero.apellido == "") ||
      (this.pasajero.email == null) || (this.pasajero.email == undefined) || (this.pasajero.email == "") ||
      (this.pasajero.fechaNacimiento == null) || (this.pasajero.fechaNacimiento == undefined) || (this.pasajero.fechaNacimiento == "") ||
      (this.pasajero.sex == null) || (this.pasajero.sex == undefined) || (this.pasajero.sex == "") ||
      (this.pasajero.tipoDocumento == null) || (this.pasajero.tipoDocumento == undefined) || (this.pasajero.tipoDocumento == "") ||
      (this.pasajero.documento == null) || (this.pasajero.documento == undefined) || (this.pasajero.documento == "") ||
      (this.pasajero.maritalStatus == null) || (this.pasajero.maritalStatus == undefined) || (this.pasajero.maritalStatus == "") ||
      (this.pasajero.ocupacion == null) || (this.pasajero.ocupacion == undefined) || (this.pasajero.ocupacion == "") ||
      (this.pasajero.pais == null) || (this.pasajero.pais == undefined) || (this.pasajero.pais == "") ||
      (this.pasajero.phone == null) || (this.pasajero.phone == undefined) || (this.pasajero.phone == "") ||
      (this.pasajero.foodPreference == null) || (this.pasajero.foodPreference == undefined) || (this.pasajero.foodPreference == "") ||
      (this.pasajero.travelPurpose == null) || (this.pasajero.travelPurpose == undefined) || (this.pasajero.travelPurpose == "") ||
      (this.pasajero.TrekkingExperience == null) || (this.pasajero.TrekkingExperience == undefined) || (this.pasajero.TrekkingExperience == "")
    ){

      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "Please Complete All Fields"
      }).then((result) => {
      })
    }else{
      // if (this.pasajero.tipoDocumento == '0afb1df8-d885-4e9e-b6df-c445aa831ffd') {
      //   if((this.pasajero.fechaExpedicion == null) || (this.pasajero.fechaExpedicion == undefined) || (this.pasajero.fechaExpedicion == "")){
      //     Swal.fire({
      //       icon: 'error',
      //       title: 'Error',
      //       allowEnterKey: false,
      //       text: "Please Confirm All Fields"
      //     }).then((result) => {
      //     })
      //     return
      //   }

      // }else{
      //   this.pasajero.fechaExpedicion = null
      // }
      if (this.typePasajero == 'Student') {
        if ((this.pasajero.dateExpirationCard == null) || (this.pasajero.dateExpirationCard == undefined) || (this.pasajero.dateExpirationCard == "")) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            allowEnterKey: false,
            text: "Please Confirm All Fields"
          }).then((result) => {
          })
          return
        }

      } else {
        this.pasajero.dateExpirationCard = null
      }

      // ((this.pasajero.tipoDocumento != '0afb1df8-d885-4e9e-b6df-c445aa831ffd') && (this.pasajero.fechaExpedicion == null) || (this.pasajero.fechaExpedicion == undefined) || (this.pasajero.fechaExpedicion == "")) ||
      var data = {
        "firstName": this.pasajero.nombre,
        "lastName": this.pasajero.apellido,
        "eMail": this.pasajero.email,
        "birthDate": this.pasajero.fechaNacimiento,
        "expirationDate": this.pasajero.fechaExpedicion,
        "sexId": this.pasajero.sex,
        "documentTypeId": this.pasajero.tipoDocumento,
        "documentNumber": this.pasajero.documento,
        "maritalStatusId": this.pasajero.maritalStatus,
        "jobId": this.pasajero.ocupacion,
        "countryId": this.pasajero.pais,
        "mobileNumber": this.pasajero.phone,
        "foodPreferencesId": this.pasajero.foodPreference,
        "foodObservation": this.pasajero.foodPreference2,
        "allergyObservation": this.pasajero.allergies,
        "medicalRequirement": this.pasajero.medical,
        "travelPurposeId": this.pasajero.travelPurpose,
        "trekkingExperienceId": this.pasajero.TrekkingExperience,
        "dateExpirationCard": this.pasajero.dateExpirationCard,
        "bookingcode": this.detalletours.booking.code
      }
      console.log(JSON.stringify(data));
      Swal.fire({
        allowEnterKey: false,
        stopKeydownPropagation: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })
      if (this.clientId == undefined || this.clientId == null || this.clientId == '') {
        //crear pasajero
        console.log(JSON.stringify(data));
        this._detail.postPassenger(data, this.idpasajero).subscribe((res: any) => {
          console.log(res);
          if (res) {
            if (this.filename!=""){
              const formData = new FormData();
              formData.append('file', this.file);
              this._detail.postFilePassenger(formData, res).subscribe((res: any) => {
                Swal.close();
                Swal.fire(
                  'Created!',
                  'updated passenger.',
                  'success'
                )
                this.listOne();
                this.modalClose();

              })
           }else{
              Swal.close();
              Swal.fire(
                'Created!',
                'updated passenger.',
                'success'
              )
              this.listOne();
              this.modalClose();
           }


          }
        });
      }else{
        //actualizar pasajero
        this._detail.putPassenger(data, this.clientId).subscribe((res: any) => {
          console.log(res);
          if (res) {
            if (this.filename!="") {
              const formData = new FormData();
              formData.append('file', this.file);
              this._detail.postFilePassenger(formData, this.clientId).subscribe((res: any) => {
                Swal.close();
                Swal.fire(
                  'Created!',
                  'updated passenger.',
                  'success'
                )
                this.listOne();
                this.modalClose();

              })
            } else {
              Swal.close();
              Swal.fire(
                'Created!',
                'updated passenger.',
                'success'
              )
              this.listOne();
              this.modalClose();
            }


          }
        });
      }

    }


  }
  modalClose(){
    $(".modal").modal('hide');
  }

  validNumber(data: number, type: string) {
    if (type == 'keyup') {
      if (data < 0) {
        data = 0
      }
    } else {
      if (data == null) {
        data = 0
      }
    }
    return data;
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
     this.file = event.target.files[0];
      this.filename = event.target.files[0].name;
    }else{
      this.filename ="";
    }
  }

}
