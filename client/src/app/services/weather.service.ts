import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   long; 
   lat; 

  constructor(
    private http: HttpClient
  ) { 


  }

  


  getWeather(long, lat) {

    const proxy = 'https://cors-anywhere.herokuapp.com/'; 
    const api = `${proxy}https://api.darksky.net/forecast/c3974de5d9efd62be582169eb6e3138e/${this.lat},${this.long}`;
    return this.http.get(api); 
  


  }

}
