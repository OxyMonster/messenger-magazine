import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminPanelService } from '../admin-panel.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit, OnDestroy {

  allNews: any[] = []; 

  constructor(
    private adminService: AdminPanelService
  ) { }

  ngOnInit() {
    
    this.getAllNews(); 
  }


  getAllNews() {
    return this.adminService
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
    return this.adminService
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
