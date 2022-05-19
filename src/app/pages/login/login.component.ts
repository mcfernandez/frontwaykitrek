import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication.service';
import { BookingsService } from 'src/app/services/bookings.service';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any;
  password: any;
  contrasenaNuevo: any;
  nombreNuevo: any;
  apellidoNuevo: any;
  telefono: any;
  emailNuevo: any;
  pais: any;
  terminoNuevo: any;
  fechaNacimeinto: any;
  paises: any;

  // lenguaje
  lenguage: any;
  language_page: number;
  page_bookings: any[];


  constructor(private _router: Router, private _authenticationservice: AuthenticationService,
    private _bookingsservice: BookingsService, private _activateroute: ActivatedRoute) {
    // const sign_in_btn = document.querySelector("#sign-in-btn");
    // const sign_up_btn = document.querySelector("#sign-up-btn");
    // const container = document.querySelector(".container");

    // sign_up_btn.addEventListener("click", () => {
    //   container.classList.add("sign-up-mode");
    // });

    // sign_in_btn.addEventListener("click", () => {
    //   container.classList.remove("sign-up-mode");
    // });
  }

  ngOnInit(): void {
    this.page_bookings = [
      {
        login: "Log In",
        signUp: "Sign Up",
        titulo_signUp: "Are you already one of us?",
        leyenda_signUp: "Enter with your data, here you can make your payments online and know and update your reservations",
        titulo_login: "New Here?",
        leyenda_login: "Register, here you can make your payments online and know and update your reservations",
        titulos_contacto_label: "Contact details",
        cuentaConUsuario: "You already have a user",
        label_usuarioExistente: "User",
        label_contrasenaExistente: "Password",
        label_acceder: "access",
        label_nombreNuevo: "Names",
        label_apellidoNuevo: "Surnames",
        label_telefonoNuevo: "Telephone",
        label_fechaNacimientoNuevo: "Date of Birth",
        label_emailNuevo: "Email ㅤ",
        label_contrasenaNuevo: "Password",
        label_paisNuevo: "Country",
        label_terminoNuevo: "I accept Terms and Conditions",
        atras_label: "Back"
      },
      {
        login: "Iniciar sesión",
        signUp: "Registrarse",
        titulo_signUp: "¿Ya eres uno de nosotros?",
        leyenda_signUp: "Ingresa con tus datos, aquí puedes realizar tus pagos por internet y conocer y actualizar tus reservas",
        titulo_login: "¿Nuevo Aqui?",
        leyenda_login: "Registrate, aquí puedes realizar tus pagos por internet y conocer y actualizar tus reservas",
        titulos_contacto_label: " Datos del contacto",
        cuentaConUsuario: " Ya cuenta con un usuario",
        label_usuarioExistente: "Usuario",
        label_contrasenaExistente: "Contraseña",
        label_acceder: "Acceder",
        label_nombreNuevo: "Nombres ㅤ",
        label_apellidoNuevo: "Apellidos ㅤ",
        label_telefonoNuevo: "Telefono ㅤ",
        label_fechaNacimientoNuevo: "Fecha de Nacimiento  ㅤ",
        label_emailNuevo: "Correo Electronico  ㅤ",
        label_contrasenaNuevo: "Contraseña  ㅤ",
        label_paisNuevo: "Pais  ㅤ",
        label_terminoNuevo: "Acepto Terminos y Condiciones",
        atras_label: "Atras"
      }
    ];

    // this._authenticationservice.destroySessionInit();
    this.lenguage = 'en';
    this.language_page = 0;
    this.searchCountry();
    Swal.close();
    this._activateroute.params.subscribe(params => {
      if (params['type']!=null){
        this.viewSignUp();
      }
    })
 }

  viewSignUp() {
    $('.container2').addClass('sign-up-mode')
  }

  viewSignIn() {
    $('.container2').removeClass('sign-up-mode')
  }
  searchCountry() {
    this._bookingsservice.getListCountry().subscribe((value: any) => {
      if (value) {
        this.paises = value;
      }
    })
  }
  login() {
    if (
      (this.usuario == null) || (this.usuario == undefined) || (this.usuario == "") ||
      (this.password == null) || (this.password == undefined) || (this.password == "")
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "Please fill in the fields, they are required"
      }).then((result) => {

      })
    } else {
      // this._authenticationservice.postSession(this.usuario, this.password)
      this.seccioUp(this.usuario, this.password);
    }

  }

  seccioUp(usuario, password) {
    this._authenticationservice.postSession(usuario, password).subscribe((res: any) => {
      if (res == true) {
        //console.log(res);
        //this.infUsuario = JSON.parse(localStorage.getItem('infoauth'));
          this._router.navigate(['/main/booking']);
      }
    });
  }

  register() {
    if (
      (this.nombreNuevo == null) || (this.nombreNuevo == undefined) || (this.nombreNuevo == "") ||
      (this.apellidoNuevo == null) || (this.apellidoNuevo == undefined) || (this.apellidoNuevo == "") ||
      (this.telefono == null) || (this.telefono == undefined) || (this.telefono == "") ||
      (this.fechaNacimeinto == null) || (this.fechaNacimeinto == undefined) || (this.fechaNacimeinto == "") ||
      (this.contrasenaNuevo == null) || (this.contrasenaNuevo == undefined) || (this.contrasenaNuevo == "") ||
      (this.emailNuevo == null) || (this.emailNuevo == undefined) || (this.emailNuevo == "") ||
      (this.pais == null) || (this.pais == undefined) || (this.pais == "")
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        allowEnterKey: false,
        text: "Please fill in the fields, they are required"
      }).then((result) => {
      })
    } else {
      var data = {
        "password": this.contrasenaNuevo,
        "name": this.nombreNuevo,
        "lastname": this.apellidoNuevo,
        "email": this.emailNuevo,
        "mobile": this.telefono,
        "birthdate": this.fechaNacimeinto,
        "countryId": this.pais,
        "isPassanger": false
      }
      // this._authenticationservice.postRegister(data)
      this._authenticationservice.postRegister(data).subscribe((res: any) => {
        if (res == true) {
          console.log(res);
          this.seccioUp(this.emailNuevo, this.contrasenaNuevo)
          //this.init = 'Iniciar';
          // this._router.navigate(['/main/booking']);
        }

      });
    }
  }
  cambio_fecha(){
    console.log(this.fechaNacimeinto);
  }

}
