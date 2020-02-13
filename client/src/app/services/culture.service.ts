import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CultureService {

  constructor(
    private http: HttpClient
  ) { }

  getCultureById(id: string) {
    const url = `culture/${id}`; 
    return this.http.get(url); 
  }
}
