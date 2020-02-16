import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

  protected ngUnsubscribe: Subject<void> = new Subject<void>();

 
  @Output() result = new EventEmitter<any>();
  allNews: any[] = []; 
  isShowAllNewsActive: boolean = false; 
  fullURL: string; 


  constructor(
    private newsService : NewsService,
    public router: Router,
  ) {
    this.getFullURL();

   }

  ngOnInit() {

    this.getAllNews(); 
   
  }

  getFullURL() {
    return this.fullURL = document.URL
  }

  getAllNews() {
    return this.newsService
               .getNews()
               .pipe( takeUntil(this.ngUnsubscribe) )
               .subscribe(data => {
                 if ( this.router.url !== '/home' ) {
                   
                   this.allNews = data['newsData'].reverse();
                   console.log(this.allNews);
                   this.result.emit(this.allNews.length); 
                   this.isShowAllNewsActive = false; 
                 
                  } else {
                    let newsData  = data['newsData'].reverse()
                    
                    if ( newsData.length >= 7 ) {
                      
                      this.allNews = [ newsData[0], newsData[1], newsData[2], newsData[3], newsData[4], newsData[5],  ];
                      this.isShowAllNewsActive = true;  
                    } else {

                      this.allNews = newsData; 
                    
                    }
        
                    console.log(this.allNews);
                    this.result.emit(this.allNews.length); 
                 
                  }

               }, err => {
                 console.log(err);
                 
               }); 

  }; 

  routeToNewsDetails(newsID: string) {
    this.router.navigate([`/news/${newsID}`]); 
  }

  navigateRouteToNews() {
    return this.router.navigate(['/news']);  
  }



  ngOnDestroy(): void {
    
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
