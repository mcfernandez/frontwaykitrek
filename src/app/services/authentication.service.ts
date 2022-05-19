import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UtilitiesService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private Http: HttpClient,
    private _utility: UtilitiesService,
    private _router: Router) {
  }

  postSession(user: string, pass: string) {
    let query: string = `authentication/login`;
    let data = {
      "username": user,
      "password": pass
    }
    console.log(data);
    return this._utility.postQueryLogin(query, data)
      .pipe(map((res: any) => {
         this.saveSession(res);
        return true;
      }));
  }

  postRegister(data){
    let query: string = `authentication/client/register`;
    return this._utility.postQueryLogin(query, data)
      .pipe(map((res: any) => {
        //this.saveSession(res);
        return true;
      }));

  }

  postCloseSession() {
    const endpoint = `http://client.api.waykitrek.site/api/Authentication/logout/${this._utility.getSession('id')}`;
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this._utility.readToken()}`,
      "Accept": "application/json"
    });
    return this.Http.post(endpoint, { headers })
      .pipe(map((data: string) => {
        return data = data;
      }));
  }



  destroySession() {
    this.postCloseSession().subscribe((res: any) => {
      localStorage.clear();
      this._router.navigate(['/login']);
    })
  }
  destroySessionInit() {
    this.postCloseSession().subscribe((res: any) => {
      localStorage.clear();
    })
  }

  saveSession(res) {
    console.log(res)
    localStorage.setItem('token', res.token);
    localStorage.setItem('infoauth', JSON.stringify(res));
  }
}
