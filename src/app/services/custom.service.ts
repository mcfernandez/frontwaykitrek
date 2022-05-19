import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilitiesService } from './utility.service';

@Injectable({
  providedIn: 'root'
})

export class CustomService {

  constructor(private _utilitiesservice: UtilitiesService) { 

  }

  setProfile(data: any) {
    return this._utilitiesservice.putQuery(`client/profile`, data).pipe(map((result: any) => { return result; }));
  }

  setChangePassword(data: any) {
    return this._utilitiesservice.putQuery(`client/changepassword`, data).pipe(map((result: any) => { return result; }));
  }

}
