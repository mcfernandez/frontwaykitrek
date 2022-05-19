import { Component, OnInit } from '@angular/core';
import { CorporativeService } from 'src/app/services/Corporative.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  datosUsuario: any = {};
  tours: any[];
  page_tours: any[];
  categories: any[];
  lenguage: string;
  language_page: number;
  cPackages:any[];
  cIncaTrail:any[];
  cATrek:any[];
  cMPichu:any[];
  
  constructor(
    private _corp: CorporativeService) 
    { }

  ngOnInit(): void {
    
    this.page_tours = [
      {
        titulo: "Booking",
        subtitulo: "If you want to create a reservation, select the desired tour.",
        name: "Name",
        type: "Modality",
        category: "Category",
      },
      {
        titulo: "Booking",
        subtitulo: "If you want to create a reservation, select the desired tour.",
        name: "Name",
        type: "Modality",
        category: "Category",
      }
    ];
    this.categories = [
      {
        name:"Inka Trail",
        id:"cIncaTrail",
      },
      {
        name:"Alternative Trek",
        id:"cATrek",
      },
      {
        name:"Package",
        id:"cPackages",
      },
      {
        name:"Machupicchu Trail / Machupicchu Tour",
        id:"cMPichu",
      }
    ];
      
    
    this.language_page = this.lenguage == "en" ? 0 : 1;

    this.datosUsuario = JSON.parse(localStorage.getItem('infoauth'));

      this._corp.getListTour().subscribe((result: any[]) => {      
        this.tours = result;
        this.cPackages = this.tours.filter(tours => tours.categoryname === 'Package');
        this.cIncaTrail = this.tours.filter(tours => tours.categoryname === 'Inka Trail');
        this.cATrek = this.tours.filter(tours => tours.categoryname === 'Alternative Trek');
        this.cMPichu = this.tours.filter(tours => tours.categoryname === 'Machupicchu Trail / Machupicchu Tour');
      })
  

  }

}
