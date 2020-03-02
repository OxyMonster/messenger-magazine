import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

constructor(
  private http: HttpClient
) { }


getNews() {

  const url = 'http://167.172.172.153:8080/news'; 

  return this.http.get(url); 
}; 


getNewsById(newsID: string) {

  const url = `news/${newsID}`; 

  return this.http.get(url); 
};  


deleteNews(newsID: string) {

  const url = `news/${newsID}`; 

  return this.http.delete(url); 
};


addNews(newsForm) { 
  
  const url = 'news'; 

  return this.http.post(url, newsForm); 
          
}; 



}
