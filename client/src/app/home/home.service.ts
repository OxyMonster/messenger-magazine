import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor(
  private http: HttpClient,
) { }


getNews() {
  const url = 'news'; 

  return this.http.get(url); 
}; 

getAllHeadlines() {
  const url = 'headlines';
  
  return this.http.get(url); 

}; 

getHeadlineById(headlineID: string) {
  const url = `headlines/${headlineID}`; 

  return this.http.get(url); 
}; 


getNewsById(newsID: string) {
  const url = `news/${newsID}`; 

  return this.http.get(url); 
}; 



}
