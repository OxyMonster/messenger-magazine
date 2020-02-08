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
  allNews: [] = []; 

  constructor(
    private newsService : NewsService,
    public router: Router,
  ) { }

  ngOnInit() {

    this.getAllNews(); 
  }

  getAllNews() {
    return this.newsService
               .getNews()
               .pipe( takeUntil(this.ngUnsubscribe) )
               .subscribe(data => {
                 
                 this.allNews = data['newsData'].reverse();
                 console.log(this.allNews);
                 this.result.emit(this.allNews.length); 

               }, err => {
                 console.log(err);
                 
               }); 

  }; 

  routeToNewsDetails(newsID: string) {
    this.router.navigate([`/news/${newsID}`]); 
  }



  ngOnDestroy(): void {
    
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
