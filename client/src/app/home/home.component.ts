import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsLength: number = 0; 
  headlines: number = 0; 


  constructor(
   
  ) { }

  ngOnInit() {
 
  }


  getNewsLength(e) {
    this.newsLength = e.length; 
    console.log(e);
    
  }
 





}
