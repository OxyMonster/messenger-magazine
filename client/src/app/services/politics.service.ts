import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliticsService {

  constructor(
    private http: HttpClient
  ) { }

  getPoliticsById(id: string) {
    const url = `politics/${id}`;        
    return this.http.get(url); 
  }
}
