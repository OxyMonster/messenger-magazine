import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  constructor(
    private http: HttpClient
  ) { }

  addHeadlines(headlinesForm) {
    const url = 'http://localhost:3000/headlines'; 

   return  this.http.post(url, headlinesForm)
            
  }; 

  addNews(newsForm) {
    const url = 'http://localhost:3000/news'; 

    return this.http.post(url, newsForm); 
            
  }
}
