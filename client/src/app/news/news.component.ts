import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

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
    public router: Router,
    private fireBaseSerive: FirebaseService
  ) { }

  ngOnInit() {
    this.getAllNews(); 
  }

  getAllNews() {
    // return this.homeService
    //            .getNews()
    //            .subscribe(data => {
                 
    //              this.allNews = data['newsData'].reverse();
    //              console.log(this.allNews);
    //              this.result.emit(this.allNews.length); 

    //            }, err => {
    //              console.log(err);
                 
    //            })
    return this.fireBaseSerive
               .getAllNews()
               .subscribe(data => {
                 
                 console.log(data);
                 
               }, err => console.log(err)); 
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
