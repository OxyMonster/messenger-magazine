import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadlinesService {

constructor(
  private http: HttpClient
) { }


getAllHeadlines() {

  const url = 'http://localhost:8080/headlines';
  
  return this.http.get(url); 

}; 


getHeadlineById(headlineID: string) {

  const url = `headlines/${headlineID}`; 

  return this.http.get(url); 
  
}; 


addHeadlines(headlinesForm) {

  const url = 'headlines'; 

 return  this.http.post(url, headlinesForm)
          
}; 


deleteHeadlines(headlinesId: string) {

  const url = `headlines/${headlinesId}`; 

  return this.http.delete(url); 

}; 


}
