import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

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
            
                 this.allHeadlines = data['headlinesData'].reverse(); 
                 console.log(this.allHeadlines);
                 
               }, err => {
                 console.log(err);
                 
               })
  }; 


  ngOnDestroy(): void {
    
    // this.getAllHeadlines().unsubscribe(); 
    
  }


}
