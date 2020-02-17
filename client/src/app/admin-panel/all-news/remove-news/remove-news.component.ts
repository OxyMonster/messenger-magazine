import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-remove-news',
  templateUrl: './remove-news.component.html',
  styleUrls: ['./remove-news.component.scss']
})
export class RemoveNewsComponent implements OnInit {

  allNews: any[] = []; 
  allFilteredNews: any[] = []; 
  isFilterActive: boolean = false; 
  searcKey: any; 


  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    
    this.getAllNews(); 
  }


  getAllNews() {
    return this.newsService
               .getNews()
               .pipe( takeUntil(this.ngUnsubscribe) )  
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
    
  }; 

  filterNews(keyword: string) {

   this.allFilteredNews = this.allNews.filter( item =>  {

      if ( item.title.trim().toLocaleLowerCase() === keyword.trim().toLocaleLowerCase() ) {
          
          this.isFilterActive = true;
          return item; 
          
        }; 
   }); 
  }; 


  showAllNews() {
    this.isFilterActive = false
  }


 
  ngOnDestroy(): void {
    
    this.getAllNews().unsubscribe(); 

  }
}
