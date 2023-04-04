import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from './medicine';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private ApiURL="http://localhost:8088/";

  constructor(private httpClient: HttpClient) { }

  getMedicineList():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.ApiURL+'Medicine'}`);
      }

      deleteMed(id:number):Observable<Object>{
        return this.httpClient.delete(`${this.ApiURL}`+'deleted'+`/${id}`);
      }
      getmedbyid(id:number):Observable<Medicine>
      {
    return this.httpClient.get<Medicine>(`${this.ApiURL}`+'Medicine'+`/${id}`);
      }

      addmed(med:Medicine):Observable<Object>{
        return this.httpClient.post(`${this.ApiURL+'addMedicine'}`,med);
      }

}
