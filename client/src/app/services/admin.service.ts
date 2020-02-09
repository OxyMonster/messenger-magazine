import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }


  loginAdmin(adminForm) {
    const url = 'http://localhost:8080/admin'; 

    return this.http.post(url, adminForm ); 

  }; 
  
  setToken(token: any) {

    localStorage.setItem('token', token); 
  
  }; 

  removeToken() {
    localStorage.removeItem('token'); 
  }; 

  getAdminPayload() {
    
    let token = localStorage.getItem('token'); 
    if ( token ) {
      
      // let adminPayload = atob(token.split('.')[1]);
      // return JSON.parse(adminPayload); 

    } else  { 
      return null
    }

  }; 


  isLoggedIn() {
    let adminPayload = this.getAdminPayload(); 

    if ( adminPayload ) {

      return adminPayload.exp > Date.now() / 1000; 
    }
  }



}
