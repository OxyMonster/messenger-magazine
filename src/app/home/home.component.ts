import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allNews: [] = []; 
  allHeadlines: [] = []; 

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {

    this.getAllNews(); 
    // this.getAllHeadlines(); 
 
  }



  getAllNews() {
    return this.homeService
               .getNews()
               .subscribe(data => {
                 
                 this.allNews = data['newsData'];
                 console.log(this.allNews);

               }, err => {
                 console.log(err);
                 
               })
  }; 


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



  ngOnDestroy() {
    // this.getAllNews().unsubscribe(); 
    // this.getAllHeadlines().unsubscribe(); 
  }


}
