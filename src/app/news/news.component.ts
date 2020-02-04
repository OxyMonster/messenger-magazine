import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

 
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
                 
                 this.allNews = data['newsData'].reverse();
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
