import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor(
  private http: HttpClient
) { }


getNews() {
  const url = 'http://localhost:3000/news'; 

  return this.http.get(url); 
}; 

getAllHeadlines() {
  const url = 'http://localhost:3000/headlines';
  
  return this.http.get(url); 

}

}
