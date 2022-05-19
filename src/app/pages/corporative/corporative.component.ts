import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CorporativeService } from 'src/app/services/Corporative.service';
import { AuthenticationService } from 'src/app/services/Authentication.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
// declare var jQuery: any; 
declare var $: any

@Component({
  selector: 'app-corporative',
  templateUrl: './corporative.component.html',
  styleUrls: ['./corporative.component.css']
  // add NgbModalConfig and NgbModal to the component providers
  // providers: [NgbModalConfig, NgbModal]
})
export class CorporativeComponent implements OnInit {
  [x: string]: any;


  // validacion de fecha
  date: { year: number, month: number };
  dia_selecionado: any;
  Hoy_anno: any;
  Hoy_mes: any;
  Hoy_dia: any;
  paso: number


  // lenguaje
  lenguage: string;
  language_page: number;

  // json de datos
  tour: any;
  jsonTour: any;
  typeSelecionado: any;
  CategoriesSelecionado: any;
  ArrayCustomerTypesSelecionado: any[];
  ArrayAdditionalServices: any[];
  //json
  arrayType: boolean[];
  // indices
  indiceTypes: any;
  arrayCustomerType: any[];
  ArrayCategories: boolean[];
  habitacionHotel: string;
  categoriaHotel: string;
  tipoHotel: string;
  hoteles_selecionados: any;
  changeRelatedTour: string;
  page_bookings: any[];
  total_hotel: number;
  total_persona: number;
  total_AdditionalServices: number;
  nuevo_usuario: boolean;
  paises: any;
  descripcion_pasajeros: { "1247fe4e-8192-eb11-ab1b-40ec994df7b4": string[]; "1347fe4e-8192-eb11-ab1b-40ec994df7b4": string[]; "1447fe4e-8192-eb11-ab1b-40ec994df7b4": string[]; "0": string[]; }[];
  usuario: any;
  cIncaTrail: string = "6178d644-7c92-eb11-ab1b-40ec994df7b4";
  cAtreek: string = "00c24891-7f92-eb11-ab1b-40ec994df7b4";
  cPackage: string = "02c24891-7f92-eb11-ab1b-40ec994df7b4";
  cMpichu: string = "01c24891-7f92-eb11-ab1b-40ec994df7b4";

  listItinerario: any = [];
  listServicioIncluido: any = [];
  listServicioNoIncluido: any = [];

  constructor(
    private _activateroute: ActivatedRoute,
    private _bookingsservice: CorporativeService,
    private _authenticationservice: AuthenticationService,
    private _router: Router
  ) {
    this.gateWayPayment = environment.gateWayPayment;
  }

  ngOnInit(): void {
    this.paso = 1;
    this.hoteles_selecionados = [];
    this.arrayType = [];
    this.page_bookings = [];
    this.CategoriesSelecionado = {};
    this.arrayCustomerType = [];
    this.ArrayCategories = [];
    this.ArrayCustomerTypesSelecionado = [];
    this.ArrayAdditionalServices = []
    this.nuevo_usuario = true;

    this.terminoNuevo = false;

    this.total_AdditionalServices = 0;
    this.total_hotel = 0;
    this.total_persona = 0;
    this.termino_ingles = "In this section are the terms and conditions."
    this.termino_espanol = "En esta sección van los terminos y condiciones"
    this.descripcion_pasajeros = [
      {
        "1247fe4e-8192-eb11-ab1b-40ec994df7b4": [
          "Being over 17 years old"
        ],
        "1347fe4e-8192-eb11-ab1b-40ec994df7b4": [
          "Peruvian undergraduate students",
          "Foreign and CAN undergraduate students: with the original student card issued by the university",
          "Considered a student with a card from 18 to 25 years old",
          "Minors between the ages of 8 and 17 are considered students,"
        ],
        "1447fe4e-8192-eb11-ab1b-40ec994df7b4": [
          "children from 3 to 7 years old",
        ],
        "0": [
          "children from 0 to 2 years old"
        ],
      },
      {
        "1247fe4e-8192-eb11-ab1b-40ec994df7b4": [
          "Ser mayor a 17 años."
        ],
        "1347fe4e-8192-eb11-ab1b-40ec994df7b4": [
          "Estudiantes de pregrado peruanos.",
          "Estudiantes de pregrado extrajeros y CAN: con el carnet de estudiantes original emitido por la universidad.",
          "Considerado estudiante con carnet desde los 18 hasta los 25 años.",
          "Menores de edad que tengan entre 8 a 17 años se les consideran estudiantes."
        ],
        "1447fe4e-8192-eb11-ab1b-40ec994df7b4": [
          "niños de 3 a 7 años",
        ],
        "0": [
          "niños de 0 a 2 años"
        ],
      },

    ]
    this.page_bookings = [
      {
        login: "Log In",
        signUp: "Sign Up",
        cerrar_sesion: "Sign off",
        signoff: "Sign off",
        relatedTour: "Related Tour",
        seeMore: "See More Tour",
        date_label: "Select Travel Date",
        resumen_label: "Summary",
        types_label: "Tour Types",
        category_label: "Select Category",
        term_date: "Date subject to subsequent changes according to Availability.",
        titulo_pasajero: "Passengers",
        categoriahotel_label: "Hotel Category",
        typeHotel_label: "Room Type",
        cantiHotel_label: "# of rooms",
        titulo_pasengers: "Passengers",
        titulo_serviciosAdicionale: "Additional Services",
        total_label: "Total",
        reserva_label: "Reserve",
        DateLabel_label: "Date",
        tipoTour_label: "Type of Tour",
        CategoriaTour_label: "Tour Category",
        despcriptionHotel: [
          "Bed & Breackfast",
          "SWD: Accommodation in simple room(1 person)",
          "DWB: Accommodation in doble or twin room(1 person)",
          "EXB: Extra bed 1(person)"
        ],
        terminos_total: " ( Amount subject to change, after verifying and modifying data)",
        titulos_contacto_label: "Contact details",
        cuentaConUsuario: "You already have a user?",
        cuentaConUsuario_si: "Yes",
        cuentaConUsuario_not: "Not",
        label_usuarioExistente: "User",
        label_contrasenaExistente: "Password",
        label_acceder: "access",
        label_nombreNuevo: "Name",
        label_apellidoNuevo: "Surname",
        label_telefonoNuevo: "Telephone",
        label_fechaNacimientoNuevo: "Date of Birth",
        label_emailNuevo: "Email",
        label_contrasenaNuevo: "Password",
        label_paisNuevo: "Country",
        label_terminoNuevo: "I accept Terms and Conditions",
        label_tituloterminoNuevo: "Booking Terms and Conditions",
        textoterminoNuevo: this.termino_ingles,
        labelClose: "Close",
        atras_label: "Back",
        titulo_pago: "PAYMENTS",
        label_total: "Total",
        label_parcial: "Part of payment",
        terminoPago: "The amount of separation depending on the selected tour",
        titulo_btnpago: "To pay",
        titulo_btnacceder: "Login",
        titulo_btnregistrar: "Sign Up",
        labelpasajero: " Are you a passenger?",
        titulopasajero: "Passenger",
        
        lnkItinerario: "Itinerary",
        lnkSincluido: "Includes Services",
        lnkSnoincluido: "Services Not Included"

      },


      {
        login: "Iniciar sesión",
        signUp: "Registrarse",
        cerrar_sesion: "Cerrar sesión",
        signoff: "Cerrar Sesión",
        relatedTour: "Otros Tour Relacionados",
        seeMore: "Ver Más Tour",
        date_label: "Selecionar Fecha de viaje",
        resumen_label: "Resumen",
        types_label: "Tipo de Tour",
        category_label: "Seleccionar Categoría",
        term_date: " Fecha sujeta a posteriores cambios según Disponibilidad.",
        titulo_pasajero: "Pasajeros ",
        categoriahotel_label: "Categoría Hotel ",
        typeHotel_label: "Tipo Habitación",
        cantiHotel_label: "Cant Habi",
        titulo_serviciosAdicionale: "Servicios Adicionales ",
        total_label: "Total",
        reserva_label: "Reservar",
        DateLabel_label: " Fecha",
        tipoTour_label: " Tipo de Tour",
        CategoriaTour_label: " Categoría del Tour",
        despcriptionHotel: ["Bed & Breackfast: cama y desayuno",
          "SWD: Alojamiento en habitación simple (1 persona)",
          "DWB: Alojamiento en habitación doble o twin (1 persona)",
          "EXB: Cama supletoria 1 (persona)"
        ],
        terminos_total: " ( Monto sujeto a cambio, si algún dato de los pasajeros no coincide con lo ya solicitado)",

        titulos_contacto_label: " Datos del contacto",
        cuentaConUsuario: "¿Ya cuenta con un usuario?",
        cuentaConUsuario_si: "Si",
        cuentaConUsuario_not: "No",
        label_usuarioExistente: "Usuario",
        label_contrasenaExistente: "Contraseña",
        label_acceder: "Acceder",
        label_nombreNuevo: "Nombre",
        label_apellidoNuevo: "Apellido",
        label_telefonoNuevo: "Telefono",
        label_fechaNacimientoNuevo: "Fecha de Nacimiento",
        label_emailNuevo: "Correo Electronico",
        label_contrasenaNuevo: "Contraseña",
        label_paisNuevo: "Pais",
        label_terminoNuevo: "Acepto Términos y Condiciones",
        label_tituloterminoNuevo: "Términos y Condiciones",
        labelClose: "Cerrar",
        textoterminoNuevo: this.termino_espanol,
        atras_label: "Atrás",
        titulo_pago: "Pagos",
        label_total: "Total",
        label_parcial: "Parcial",
        terminoPago: "El monto de separación en función al tour seleccionado",
        titulo_btnpago: "Pagar",
        titulo_btnacceder: "Acceder",
        titulo_btnregistrar: "Registrar",
        labelpasajero: " ¿Eres un pasajero?",
        titulopasajero: "Pasajero"
      }
    ];
    this._activateroute.params.subscribe(params => {
      this.tour = params['tour'];
      this.lenguage = 'en';
      // elimino todos los caracteres diferente a numeros
      var caracter = this.tour;
      caracter = caracter.replace(/\-/g, '');
      caracter = caracter.replace(/[a-zA-Z]/g, '');
      caracter = caracter.replace(/[^0-9]/g, '');
      caracter = caracter.replace(/\./g, '');
      this.tour = caracter;
      // elimino todos los caracteres diferente a letras
      caracter = this.lenguage;
      caracter = caracter.replace(/\-/g, '');
      // caracter = caracter.replace(/[a-zA-Z]/g, '');
      caracter = caracter.replace(/[0-9]/g, '');
      caracter = caracter.replace(/\./g, '');
      this.lenguage = caracter;

      if (
        (!isNaN(this.tour)) && (this.tour.length != 6)
      ) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          allowEnterKey: false,
          text: "Hay un error en el codigo del tour"
        }).then((result) => {
          this._router.navigate(['/login']);
        })
      } else if (
        (this.lenguage.length != 2)
      ) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          allowEnterKey: false,
          text: "Hubo un error escogiendo el lenguaje"
        }).then((result) => {
          this._router.navigate(['/login']);
        })
      } else {
        // elegir lenguaje
        this.language_page = this.lenguage == "en" ? 0 : 1;
        Swal.fire({
          allowEnterKey: false,
          stopKeydownPropagation: false,
          didOpen: () => {
            Swal.showLoading()
          }
        })
        this._bookingsservice.getList(this.tour).subscribe((value: any) => {
          if (value) {
            this.hoteles_selecionados = [];
            this.arrayType = [];
            this.CategoriesSelecionado = {};
            this.arrayCustomerType = [];
            this.ArrayCategories = [];
            this.ArrayCustomerTypesSelecionado = [];
            this.ArrayAdditionalServices = []
            this.total_AdditionalServices = 0;
            this.total_hotel = 0;
            this.total_persona = 0;
            //asignacion del tour
            this.jsonTour = value;
            this.listItinerario = this.jsonTour.itinerary;
            this.listServicioIncluido = this.jsonTour.includeServices;
            this.listServicioNoIncluido = this.jsonTour.notincludeServices;

            if(this.jsonTour.categoryPrincipal == this.cMpichu )
              this.page_bookings[this.language_page].category_label = "Hotel's Category";
              else
              this.page_bookings[this.language_page].category_label = "Language";
            

            Swal.close();
            //por defecto selecionado el dia de hoy
            // y se pueda seleccionar a que sea mayor al dia de hoy
            this.Hoy_anno = new Date().getFullYear();
            this.Hoy_mes = new Date().getMonth() + 1;
            this.Hoy_dia = new Date().getDate();
            this.dia_selecionado = {
              day: this.Hoy_dia,
              month: this.Hoy_mes,
              year: this.Hoy_anno
            };
            this.fecha_max = (this.Hoy_anno - 18) + "-" + (this.Hoy_mes < 10 ? '0' + this.Hoy_mes : this.Hoy_mes) + "-" + (this.Hoy_dia < 10 ? '0' + this.Hoy_dia : this.Hoy_dia);
            // this.fecha_max = "2000-01-01";
            //selecionar valores por defectos
            this.changeTypesUnico();
            this.changeCategorieUnico();
            // this.changeCategorie(-1);
            this.llenarAdditionalServices();
            this.searchCountry()
            // this.paso = 1;
            // this.language_page = 'ES';
          } else {
            this._router.navigate(['/login']);
          }
        }, 
        error => {
          this._router.navigate(['/main/tours']);      
        }
        );
      }
    })
  }

  searchCountry() {
    this._bookingsservice.getListCountry().subscribe((value: any) => {
      if (value) {
        this.paises = value;
      }
    })
  }
  selecionarIdioma(lang) {
    this._router.navigate([`/booking/${this.tour}/${lang}`]);
  }

  // EVENTO DEL FORMULARIO
  changeTypesUnico() {
    // if (this.jsonTour.types.length == 1) {
    this.changeTypes(0)
    this.radioSelectedType = this.jsonTour.types[0].value

  }
  changeCategorieUnico() {
    // if (this.jsonTour.categories.length == 1) {
    this.changeCategorie(0)
    this.radioSelectedCategories = this.jsonTour.categories[0].value

    // } else {
    //   this.changeCategorie(-1)
    // }
  }
  changeTypes(index) {
    let i = 0;
    if (index == -1) {
      for (const array of this.jsonTour.types) {
        this.arrayType[i] = false;
        i = i + 1;
      }
    } else {
      for (const array of this.jsonTour.types) {
        this.arrayType[i] = false;
        i = i + 1;
      }
      this.arrayType[index] = true;

      this.typeSelecionado = this.jsonTour.types[index]
    }
    this.buscarPrecioIndividual();
  }
  changeCategorie(index) {
    let i = 0;
    if (index == -1) {
      for (const array of this.jsonTour.categories) {
        this.ArrayCategories[i] = false;
        i = i + 1;
      }
    } else {
      for (const array of this.jsonTour.categories) {
        this.ArrayCategories[i] = false;
        i = i + 1;
      }
      this.ArrayCategories[index] = true;

      this.CategoriesSelecionado = this.jsonTour.categories[index]
    }
    this.buscarPrecioIndividual();

  }

  selecionar_dia() {
    
  }

  changeCustomerType(index) {
    var valor = this.arrayCustomerType[index] + "";
    if (valor) {

      valor = valor.replace(/\-/g, '');
      valor = valor.replace(/[a-zA-Z]/g, '');
      valor = valor.replace(/[^0-9]/g, '');
      valor = valor.replace(/\./g, '');
      // this.arrayCustomerType[index] = valor;
    }
    var numero = parseFloat(valor);
    var index_selecionado
    if (numero > 0) {
      var dato = this.ArrayCustomerTypesSelecionado.find(ds => ds.value == this.jsonTour.customerTypes[index].value);
      if (dato == undefined) {
        this.ArrayCustomerTypesSelecionado.push(this.jsonTour.customerTypes[index]);
        index_selecionado = this.ArrayCustomerTypesSelecionado.length - 1;
        this.ArrayCustomerTypesSelecionado[index_selecionado].cantidad = numero;
      } else {
        index_selecionado = this.ArrayCustomerTypesSelecionado.indexOf(this.jsonTour.customerTypes[index])
        this.ArrayCustomerTypesSelecionado[index_selecionado].cantidad = numero;
      }
      
      // var array_precio_tempo = this.seachPrecio(index_selecionado);
      // tengo que buscar cual es la cantidad maxima de personas

      // if (array_precio_tempo == 0) {
      //   this.ArrayCustomerTypesSelecionado = [];
      // } else {
      //   var precio = array_precio_tempo.find(pt => pt.quantity == numero);
      //   if (precio == undefined) {
      //     var ultimo = array_precio_tempo.length - 1;
      //     this.ArrayCustomerTypesSelecionado[index_selecionado].precio = array_precio_tempo[ultimo].price * numero;
      //   } else {
      //     this.ArrayCustomerTypesSelecionado[index_selecionado].precio = precio.price * numero;
      //   }
      // }

    } else {
      var dato = this.ArrayCustomerTypesSelecionado.find(ds => ds.value == this.jsonTour.customerTypes[index].value);
      if (dato != undefined) {
        index_selecionado = this.ArrayCustomerTypesSelecionado.indexOf(this.jsonTour.customerTypes[index])
        if (index_selecionado !== -1) {
          this.ArrayCustomerTypesSelecionado.splice(index_selecionado, 1);
        }
      }
    }
    this.buscarPrecioIndividual();

  }
  buscarPrecioIndividual() {
    let cnt = 0, total_personas = 0;
    for (const iterator of this.ArrayCustomerTypesSelecionado) {
      total_personas += iterator.cantidad;
    }
    for (const iterator of this.ArrayCustomerTypesSelecionado) {
      var array_precio_tempo = this.seachPrecio(iterator.value);
      if (array_precio_tempo == 0) {
        //error preguntar
        this.ArrayCustomerTypesSelecionado = [];
        for (let index = 0; index < this.arrayCustomerType.length; index++) {
          this.arrayCustomerType[index] = 0
        }
        Swal.fire({
          icon: 'error',
          title: 'Error',
          allowEnterKey: false,
          text: `No se encontraron precios para el tipo de de persona ${iterator.label} relacionado con la categoria ${this.CategoriesSelecionado.label} y el tipo ${this.typeSelecionado.label}`
        }).then((result) => {

        })
      } else {
        var precio = array_precio_tempo.find(pt => pt.quantity == total_personas);

        if (precio == undefined) {
          var ultimo = 0;
          var mayor = array_precio_tempo[0].quantity;
          for (let il = 0; il < array_precio_tempo.length; il++) {
            if (mayor < array_precio_tempo[il].quantity) {
              ultimo=il;
              mayor = array_precio_tempo[il].quantity
            }
          }
          iterator.precio = array_precio_tempo[ultimo].price * iterator.cantidad;
        } else {
          iterator.precio = precio.price * iterator.cantidad;
        }
        
      }
    }
    this.totales_personas();
  }
  seachPrecio(customerTypeId) {
    if (
      (this.CategoriesSelecionado.value == null) || (this.CategoriesSelecionado.value == undefined) || (this.CategoriesSelecionado.value == '')) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "Favor seleccione los campos Tipo y Categoria para buscar llenar pasajeros"
      }).then((result) => {

      })
      return 0;
    } else {      
      let precio = this.jsonTour.prices.filter(
        precio => precio.categoryId == (this.CategoriesSelecionado.value)
          && (precio.typeId == this.typeSelecionado.value)
          && (precio.customerTypeId == customerTypeId)
      );

      return precio;
    }
  }
  totales_personas() {    
    let precio = 0;
    for (const iterator of this.ArrayCustomerTypesSelecionado) {

      precio = precio + iterator.precio
    }

    this.total_persona = precio;
  }

  changeAdditionalServices(p, i) {
    var estado = this.jsonTour.additionalServices[p].prices[i].model;



    this.jsonTour.additionalServices[p].prices[i].model = estado
    this.jsonTour.additionalServices[p].prices[i].habilitar_input = !estado;
    this.jsonTour.additionalServices[p].prices[i].cantidad = estado == false ? '' : this.jsonTour.additionalServices[p].cantidad;
    var additionalServices_tempo = this.jsonTour.additionalServices[p].prices[i];
    var encontrado = this.ArrayAdditionalServices.find(dato => dato.id == additionalServices_tempo.id)

    if (encontrado) {
      let index_encontrado = this.ArrayAdditionalServices.indexOf(encontrado);
      this.ArrayAdditionalServices.splice(index_encontrado, 1);
    }

    this.totalAdditionalServices();
  }
  changeCantAdditionalServices(p, i) {
    var additionalServices_tempo = this.jsonTour.additionalServices[p].prices[i];
    var valor = this.jsonTour.additionalServices[p].prices[i].cantidad + "";
    if (valor) {
      valor = valor.replace(/\-/g, '');
      valor = valor.replace(/[a-zA-Z]/g, '');
      valor = valor.replace(/[^0-9]/g, '');
      valor = valor.replace(/\./g, '');
      // this.jsonTour.additionalServices[p].prices[i].cantidad = parseFloat(valor);
    }

    // this.jsonTour.additionalServices[p].prices[i].cantidad = valor;

    var numero = parseFloat(valor);
    var encontrado = this.ArrayAdditionalServices.find(dato => dato.id == additionalServices_tempo.id)
    if (numero > 0) {
      if (encontrado) {
        let index_encontrado = this.ArrayAdditionalServices.indexOf(encontrado);
        this.ArrayAdditionalServices[index_encontrado].cantidad = numero
        this.ArrayAdditionalServices[index_encontrado].precio = numero * this.ArrayAdditionalServices[index_encontrado].value
      } else {
        this.ArrayAdditionalServices.push(
          {
            name: this.jsonTour.additionalServices[p].name,
            label: additionalServices_tempo.label,
            id: additionalServices_tempo.id,
            value: additionalServices_tempo.value,
            cantidad: numero,
            precio: numero * additionalServices_tempo.value
          }
        )
      }
    } else {
      if (encontrado) {
        let index_encontrado = this.ArrayAdditionalServices.indexOf(encontrado);
        this.ArrayAdditionalServices.splice(index_encontrado, 1);
      }
    }
    this.totalAdditionalServices();
  }
  totalAdditionalServices() {
    let precio = 0;
    for (const iterator of this.ArrayAdditionalServices) {

      precio = precio + iterator.precio
    }

    this.total_AdditionalServices = precio;

  }
  llenarAdditionalServices() {
    for (let principal = 0; principal < this.jsonTour.additionalServices.length; principal++) {
      for (let index = 0; index < this.jsonTour.additionalServices[principal].prices.length; index++) {
        this.jsonTour.additionalServices[principal].prices[index].model = false;
        this.jsonTour.additionalServices[principal].prices[index].habilitar_input = true;
        this.jsonTour.additionalServices[principal].prices[index].cantidad = '';
      }

    }
    
    this.totalAdditionalServices();
  }




  validarNumero(type, p, i) {
    // debugger;
    switch (type) {

      case 1:
        var valor = this[p] + '';
        valor = valor.replace(/\-/g, '');
        valor = valor.replace(/[a-zA-Z]/g, '');
        valor = valor.replace(/[^0-9]/g, '');
        valor = valor.replace(/\./g, '');
        this[p] = parseFloat(valor);
        break;
      case 2:
        var valor = this.jsonTour.additionalServices[p].prices[i].cantidad + "";
        valor = valor.replace(/\-/g, '');
        valor = valor.replace(/[a-zA-Z]/g, '');
        valor = valor.replace(/[^0-9]/g, '');
        valor = valor.replace(/\./g, '');
        this.jsonTour.additionalServices[p].prices[i].cantidad = parseFloat(valor);
        break;
      case 3:
        var valor = this.arrayCustomerType[p] + "";
        valor = valor.replace(/\-/g, '');
        valor = valor.replace(/[a-zA-Z]/g, '');
        valor = valor.replace(/[^0-9]/g, '');
        valor = valor.replace(/\./g, '');
        this.arrayCustomerType[p] = parseFloat(valor);
        break
      default:
        break;
    }

  }
  saveHotel() {
    // var additionalServices_tempo = this.habitacionHotel;
    var valor = this.habitacionHotel + "";
    if (valor) {
      valor = valor.replace(/\-/g, '');
      valor = valor.replace(/[a-zA-Z]/g, '');
      valor = valor.replace(/[^0-9]/g, '');
      valor = valor.replace(/\./g, '');

    }
    var valor2 = parseFloat(valor)
    // this.habitacionHotel = valor;

    if (
      (this.categoriaHotel == "") || (this.categoriaHotel == undefined) ||
      (this.tipoHotel == "") || (this.tipoHotel == undefined) ||
      (valor.length == 0) || (valor == "0")
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "Todos los datos son Selecionados"
      }).then((result) => {
      })
    } else {
      var catogoria = this.jsonTour.hotel.rooms.find(dato => dato.value == this.categoriaHotel);
      var tipo = this.jsonTour.hotel.types.find(dato => dato.value == this.tipoHotel);
      
      // let precio = 0;

      let precio_array = this.jsonTour.hotel.prices.find(
        dato => dato.roomId == (catogoria.value)
          && (dato.typeId == tipo.value)
      );
      
      if (precio_array != undefined) {
        this.hoteles_selecionados.push({
          categoria: catogoria,
          tipo: tipo,
          cantidad: valor2,
          precio: precio_array.price * this.jsonTour.hotelNight * valor2
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          allowEnterKey: false,
          text: ` el tipo de hotel ${tipo.label} con el tipo de habitación ${catogoria.label}  no está configurado `
        }).then((result) => {
        })
      }

      this.habitacionHotel = "";
      this.total_hoteles();

    }
  }
  deleteHotel(index) {
    this.hoteles_selecionados.splice(index, 1);
    this.total_hoteles();
  }
  changeChangeRelatedTour(value) {
    if (value) {
      // this._router.navigate([`/booking/${value}/${this.lenguage}`]);

      window.open(`#/booking/${value}`, '_blank');
    }
    // this._router.navigate([`/booking/${this.tour}/${lang}`]);
    this.changeRelatedTour = "0";

  }
  total_hoteles() {
    let precio = 0;
    for (const iterator of this.hoteles_selecionados) {
      // let precio_array = this.jsonTour.hotel.prices.find(
      //   dato => dato.roomId == (iterator.categoria.value)
      //     && (dato.typeId == iterator.tipo.value)
      // );
      precio = precio + iterator.precio
    }

    this.total_hotel = precio;
  }



  cambiar_paso() {
    var adultPassengers = 0; 
    var studentPassengers = 0;                                                              // check for Rudy
    //  "": string[]; "1447fe4e-8192-eb11-ab1b-40ec994df7b4": string[]; "0": string[]; } [];
    for (const iterator of this.ArrayCustomerTypesSelecionado) {
      switch (iterator.value) {
        case "1247fe4e-8192-eb11-ab1b-40ec994df7b4":
          adultPassengers = iterator.cantidad;          
          // adultPrice = iterator.precio;
          break;
        case "1347fe4e-8192-eb11-ab1b-40ec994df7b4":                                        // check for Rudy
          studentPassengers = iterator.cantidad;
          break;

        default:
          // babyPassengers = iterator.cantidad
          break;
      }
    }
    if (
      (this.CategoriesSelecionado.value == null) || (this.CategoriesSelecionado.value == undefined) || (this.CategoriesSelecionado.value == '')
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "Please select the Type and Category fields to search fill passengers."
      }).then((result) => {

      })
    } else if (
      (adultPassengers <= 0) && (studentPassengers <= 0)        // check for Rudy (adultPassengers <= 0)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "At least one adult must be selected."
      }).then((result) => {
      })
    } else if (
      (this.jsonTour.hotel != null) && (this.hoteles_selecionados.length <= 0)
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "Selecting a Hotel in this Tour is mandatory."
      }).then((result) => {
      })
    } else {
      this.datosUsuario = JSON.parse(localStorage.getItem('infoauth'));
      this.savetour();
    }
  }
  savetour() {
    if (this.terminoNuevo == false) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "Accepting the Terms and Conditions is necessary to enter the tour."
      }).then((result) => {
      })
    } else {
      var additionalServices = [];
      for (const iterator of this.ArrayAdditionalServices) {
        additionalServices.push({
          "name": iterator.name,
          "tourAdditionalServiceId": iterator.id,
          "quantity": iterator.cantidad,
          "amountUnit": iterator.value,
          "amountTotal": iterator.precio
        })
      }
      var hoteles = [];
      for (const iterator of this.hoteles_selecionados) {
        let precio_array = this.jsonTour.hotel.prices.find(
          dato => dato.roomId == (iterator.categoria.value)
            && (dato.typeId == iterator.tipo.value)
        );
        // this.jsonTour.
        hoteles.push({
          "hoteTypeId": iterator.tipo.value,
          "roomTypeId": iterator.categoria.value,
          "price": precio_array.price,
          "quantity": iterator.cantidad,
          "amount": precio_array.price * iterator.cantidad
        })
      }
      var adultPassengers = 0, studentPassengers = 0, childrenPassengers = 0, babyPassengers = 0, adultPrice = 0, studentPrice = 0, childrenPrice = 0;
      //  "": string[]; "1447fe4e-8192-eb11-ab1b-40ec994df7b4": string[]; "0": string[]; } [];
      for (const iterator of this.ArrayCustomerTypesSelecionado) {
        switch (iterator.value) {
          case "1247fe4e-8192-eb11-ab1b-40ec994df7b4":
            adultPassengers = iterator.cantidad;
            adultPrice = iterator.precio;
            break;
          case "1347fe4e-8192-eb11-ab1b-40ec994df7b4":
            studentPassengers = iterator.cantidad;
            studentPrice = iterator.precio;
            break;
          case "1447fe4e-8192-eb11-ab1b-40ec994df7b4":
            childrenPassengers = iterator.cantidad;
            childrenPrice = iterator.precio;
            break;

          default:
            babyPassengers = iterator.cantidad
            break;
        }
      }
      this.montoPagar = (this.total_AdditionalServices + this.total_hotel + this.total_persona);
     // debugger;
      var data = {
        "tourId": this.jsonTour.id,
        "categoryId": this.CategoriesSelecionado.value,
        "tourTypeId": this.typeSelecionado.value,
        "startDate": `${this.dia_selecionado.year}-${(this.dia_selecionado.month < 10 ? '0' + this.dia_selecionado.month : this.dia_selecionado.month)}-${this.dia_selecionado.day < 10 ? '0' + this.dia_selecionado.day : this.dia_selecionado.day}`,
        "endDate": `${this.dia_selecionado.year}-${(this.dia_selecionado.month < 10 ? '0' + this.dia_selecionado.month : this.dia_selecionado.month)}-${this.dia_selecionado.day < 10 ? '0' + this.dia_selecionado.day : this.dia_selecionado.day}`,
        "adultPassengers": adultPassengers,
        "childrenPassengers": childrenPassengers,
        "studentPassengers": studentPassengers,
        "adultPrice": adultPrice,
        "studentPrice": studentPrice,
        "childrenPrice": childrenPrice,
        "amount": this.montoPagar,
        "amountStr": "" + (this.montoPagar * 100),
        // "amount": 10000,
        // "debt": 0,
        "debt": (this.total_hotel + this.total_persona + this.total_AdditionalServices) - this.montoPagar,
        "contactId": this.datosUsuario.id,
        "babyPassengers": babyPassengers,
        "additionalServices": additionalServices,
        "hotels": hoteles,
      }

      this._bookingsservice.postBookings(data).subscribe((res: any) => {
        if (res) {
          this.bookingres = res;
          this.datos_save = Object.assign({}, this.bookingres);
          this._router.navigate(['/main/booking']);
        }
      });
    }
  }
  abrir_modal(id) {
    $("#" + id).modal('show');
  }
  modalClose() {
    $(".modal").modal('hide');
  }
  irsignUp(){
    this._router.navigate(['/login/signUp']);
  }
}
