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
    const url = 'headlines'; 

   return  this.http.post(url, headlinesForm)
            
  }; 

  addNews(newsForm) {
    const url = 'news'; 

    return this.http.post(url, newsForm); 
            
  }; 

  deleteNews(newsID: string) {
    const url = `news/${newsID}`; 

    return this.http.delete(url); 
  };

  deleteHeadlines(headlinesId: string) {
    const url = `headlines/${headlinesId}`; 

    return this.http.delete(url); 
  }; 

  getNews() {
    const url = 'news'

    return this.http.get(url); 

  }

  getHeadlines() {
    const url = 'headlines'; 

    return this.http.get(url); 

  }
}
