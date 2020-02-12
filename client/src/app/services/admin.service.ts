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


 removeCulture(cultureId: string) {

  const url = `culture/${cultureId}`; 

  return this.http.delete(url); 
};


  getCulture() { 
    
  const url = 'culture'; 

  return  this.http.get(url); 

  }; 





  addPolitics(politicsForm) {

  const url = 'politics'; 

  return  this.http.post(url, politicsForm)

  };


 removePolitics(politicsId: string) {

  const url = `politics/${politicsId}`; 

  return this.http.delete(url); 
};

  getAllPolitics() {
    const url = 'politics'; 

    return  this.http.get(url)
  }

  addEconomy(economyForm) {


  const url = 'economy'; 

  return  this.http.post(url, economyForm)

  };

  removeEconomy(economyId: string) {

    const url = `economy/${economyId}`; 
  
    return this.http.delete(url); 
  };


  getAllEconomy() {


  const url = 'economy'; 

  return  this.http.get(url)

  };


}
