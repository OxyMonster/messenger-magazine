import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private http: HttpClient
  ) { }



  getCurrency() {
    const api = 'http://www.floatrates.com/daily/gel.json'; 

    return this.http.get(api); 
  }; 
  
  
  getWeather() {

    if ( navigator.geolocation ) {

      navigator.geolocation.getCurrentPosition(position => {
        let long = position.coords.longitude; 
        let lat = position.coords.latitude; 
        console.log("ashjdjkashdkjs");
        
      })

    } else {
      console.log('please Allow to show you weather'); 
    }

  }
        
}
