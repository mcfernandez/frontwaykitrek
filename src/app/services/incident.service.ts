import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilitiesService } from './utility.service';
@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private _utilitiesservice: UtilitiesService,
    private httpClient: HttpClient) { }


  getList(): Observable<any> {
    let url: string = `incident/list`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }
  getListTyes(): Observable<any> {
    let url: string = `incident/list/types`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }
  getListStatus(): Observable<any> {
    let url: string = `incident/list/status`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }

  getListByCurrentUser(): Observable<any> {
    let url: string = `incident/ListByCurrentUser`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }
  getListOne(id): Observable<any> {
    let url: string = `incident/${id}`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }
  postIncident(data) {
    let query: string = `incident/save`;
    return this._utilitiesservice.postQuery(query, data)
      .pipe(map((res: any) => {
        //this.saveSession(res);
        return res;
      }));
  }
  putIncident(id,data) {
    let query: string = `incident/${id}/update`;
    return this._utilitiesservice.putQuery(query, data)
      .pipe(map((res: any) => {
        //this.saveSession(res);
        return res;
      }));
  }
  putIncidentChangeStatus(id, data) {
    let query: string = `incident/${id}/change/status`;
    return this._utilitiesservice.putQuery(query, data)
      .pipe(map((res: any) => {
        //this.saveSession(res);
        return res;
      }));
  }
  deleteInciden(id) {
    let query: string = `incident/${id}/delete`;
    return this._utilitiesservice.deleteQuery(query)
      .pipe(map((res: any) => {
        //this.saveSession(res);
        return res;
      }));
  }
}
