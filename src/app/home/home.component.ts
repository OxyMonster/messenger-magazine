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
    private homeService: HomeService
  ) { }

  ngOnInit() {

    // this.getAllHeadlines(); 
 
  }


  getNewsLength(e) {
    this.newsLength = e.length; 
    console.log(e);
    
  }
 


  // getAllHeadlines() {
  //   return this.homeService
  //              .getAllHeadlines()
  //              .subscribe(data => {
            
  //                this.allHeadlines = data['headlinesData']; 
  //                console.log(this.allHeadlines);
                 
  //              }, err => {
  //                console.log(err);
                 
  //              })
  // }; 



}
