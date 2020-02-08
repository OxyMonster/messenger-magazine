import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['../news.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  newsID: string; 
  newsData: any = {}; 

  constructor(
    private newsService: HomeService, 
    private router: ActivatedRoute
  ) { }

  ngOnInit() {

    this.newsID = this.router.snapshot.params.id; 
    this.getNewsByID(); 

  }


  getNewsByID() {
    this.newsService
        .getNewsById(this.newsID)
        .subscribe(data => {

          console.log(data);
          this.newsData = data; 
          
        }, err => {
          console.log(err);
          
        })
  }




}
