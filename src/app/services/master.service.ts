import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterObj } from '../interfaces/register-obj';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = 'https://projectapi.gerasim.in/api/RealEstate/';

  constructor(private http: HttpClient) { }

  addAgent(obj: RegisterObj): Observable<any> {
    return this.http.post(`${this.apiUrl}AddNewAgent`, obj);
  }

}