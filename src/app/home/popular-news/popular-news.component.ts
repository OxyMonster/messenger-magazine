import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.scss']
})
export class PopularNewsComponent implements OnInit {

  allHeadlines :[] = []; 
  isHeadlinesPage: boolean = false; 
  


  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit() {

    this.router.url === '/headlines' ? this.isHeadlinesPage = true : this.isHeadlinesPage = false; 
    this.getAllHeadlines(); 
 
  }

  getAllHeadlines() {
    return this.homeService
               .getAllHeadlines()
               .subscribe(data => {
            
                 this.allHeadlines = data['headlinesData']; 
                 console.log(this.allHeadlines);
                 
               }, err => {
                 console.log(err);
                 
               })
  }; 


  ngOnDestroy(): void {
    
    // this.getAllHeadlines().unsubscribe(); 
    
  }


}
