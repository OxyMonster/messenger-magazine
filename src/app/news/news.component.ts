import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

 
  @Output() result = new EventEmitter<any>();
  allNews: [] = []; 

  constructor(
    private homeService: HomeService,
    public router: Router
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

  routeToNewsDetails(newsID: string) {
    this.router.navigate([`/news/${newsID}`]); 
  }

  getNews(e)   {
    console.log(e);
    
  }


  ngOnDestroy(): void {
    
    this.getAllNews().unsubscribe(); 
  }
}
