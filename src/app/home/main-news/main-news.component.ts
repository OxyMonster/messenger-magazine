import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent implements OnInit, OnDestroy {

  allNews: [] = []; 

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews() {
    return this.homeService
               .getNews()
               .subscribe(data => {
                 
                 console.log(data);
                 this.allNews = data['newsData'];
                 console.log(this.allNews);
                 

               }, err => {
                 console.log(err);
                 
               })
  }; 


  ngOnDestroy(): void {
    this.getAllNews().unsubscribe(); 
  }

}
