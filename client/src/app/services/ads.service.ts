import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(
    private http: HttpClient
  ) { }



  getAllAds() {

    return this.http.get('ads')

  }; 
  

addAds(adsForm) {

  const url = 'ads'; 

  return  this.http.post(url, adsForm)
          
  }; 
}
