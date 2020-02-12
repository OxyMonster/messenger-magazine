import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }


  addCulture(cultureForm) {

  const url = 'culture'; 

  return  this.http.post(url, cultureForm)

  };

  getCulture() { 
    
  const url = 'culture'; 

  return  this.http.get(url); 
  }

  addPolitics(politicsForm) {

  const url = 'politics'; 

  return  this.http.post(url, politicsForm)

  };

  getAllPolitics() {
    const url = 'politics'; 

    return  this.http.get(url)
  }

  addEconomy(economyForm) {


  const url = 'economy'; 

  return  this.http.post(url, economyForm)

  };
  getAllEconomy() {


  const url = 'economy'; 

  return  this.http.get(url)

  };


}
