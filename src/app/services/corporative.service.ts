import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilitiesService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class CorporativeService {

  constructor(private _utilitiesservice: UtilitiesService,
    private httpClient: HttpClient) { }

  getList(id): Observable<any> {
    let url: string = `tour/private/${id}`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }

  getListCountry(): Observable<any> {
    let url: string = `common/countries`;
    return this._utilitiesservice.getQuery(url, false).pipe(map((respuesta: any) => respuesta));
  }

  postBookings(data) {
    let query: string = `tour/save`;
    return this._utilitiesservice.postQuery(query, data)
      .pipe(map((res: any) => {
        //this.saveSession(res);
        return res;
      }));
  }

  getListPayme(valor): Observable<any> {
    let url: string = `tour/password/payme/${valor}`;
  return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }

  getListTour(): Observable<any> {
    let url: string = `tour/list`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }

}
