import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EconomyService {

  constructor(
    private http: HttpClient
  ) { }


  getEconomyById(id: string) {
    const url = `economy/${id}`; 
    return this.http.get(url); 
  }
}
