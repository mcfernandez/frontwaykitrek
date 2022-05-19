import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilitiesService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private _utilitiesservice: UtilitiesService) { }

// /api/tour/booking/list
  getListOne(id): Observable<any> {
    let url: string = `tour/booking/${id}`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }
  getList(): Observable<any> {
    let url: string = `tour/booking/list`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }
  getListOption(key): Observable<any> {
    let url: string = `optionlist/listbykey/${key}`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }
  getListAdditional(bookingId): Observable<any> {
    // /api/tour / { bookingId } / service / additional

    let url: string = `tour/${bookingId}/service/additional`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }
  getOneClient(clientId): Observable<any> {
    // /api/tour / { bookingId } / service / additional

    let url: string = `client/${clientId}`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }

  getListJobs(): Observable<any> {
    let url: string = `job/list`;
    return this._utilitiesservice.getQuery(url, true).pipe(map((respuesta: any) => respuesta));
  }
  // /api/tour / add / service
  postAddService(data,id) {
    let query: string = `tour/add/service?bookingId=${id}`;
    return this._utilitiesservice.postQuery(query, data)
      .pipe(map((res: any) => {
        //this.saveSession(res);
        return res;
      }));
  }
  postPassenger(data,id){
    // /api​/client / { clientId } / update
    let query: string = `client/${id}/create`;
    return this._utilitiesservice.postQuery(query, data)
      .pipe(map((res: any) => {
        return res;
    }));
  }
  paymentAdd(data){
    // /api/tour/payment/add
    let query: string = `tour/payment/add`;
    return this._utilitiesservice.postQuery(query, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }
  postFilePassenger(data, id) {

    // /api/client/{clientId}/add/document
    let query: string = `client/${id}/add/document`;
    return this._utilitiesservice.postFile(query, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }
  putPassenger(data, id) {

    // /api/client/{clientId}/add/document
    let query: string = `client/${id}/update`;
    return this._utilitiesservice.putQuery(query, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
