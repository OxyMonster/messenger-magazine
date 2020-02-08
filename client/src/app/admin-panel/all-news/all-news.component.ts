import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit, OnDestroy {

  allNews: any[] = []; 

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    
    this.getAllNews(); 
  }


  getAllNews() {
    return this.newsService
               .getNews()
               .subscribe(data => {
                
                 data['newsData'].map( item => item.isActive = false ); 
                 this.allNews = data['newsData'];
                 console.log(this.allNews);
                  
                 
               }, err => {
                 console.log(err);
                 
               }); 
  }; 

  toggleNews(index: number) {
    
    const item = this.allNews[index]; 
    item.isActive === false ? item.isActive = true : item.isActive = false; 
   
    
  }; 

  removeNews(index: number, newsID: string) {
    return this.newsService
               .deleteNews(newsID)
               .subscribe(data => {
                 
                 console.log(data);
                 this.allNews.splice(index, 1); 
                 
               }, err => {
                 console.log(err);

               })
    
  }


  ngOnDestroy(): void {
    
    this.getAllNews().unsubscribe(); 

  }

}
