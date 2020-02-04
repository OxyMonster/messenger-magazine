import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent implements OnInit, OnDestroy {

  @Output() result = new EventEmitter<any>();
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
                 
                 this.allNews = data['newsData'];
                 console.log(this.allNews);
                 this.result.emit(this.allNews.length); 

               }, err => {
                 console.log(err);
                 
               })
  }; 

  getNews(e)   {
    console.log(e);
    
  }


  ngOnDestroy(): void {
    
    // this.getAllNews().unsubscribe(); 
  }

}
