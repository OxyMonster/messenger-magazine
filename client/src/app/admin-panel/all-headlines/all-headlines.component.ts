import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeadlinesService } from 'src/app/services/headlines.service';

@Component({
  selector: 'app-all-headlines',
  templateUrl: './all-headlines.component.html',
  styleUrls: ['./all-headlines.component.scss']
})
export class AllHeadlinesComponent implements OnInit, OnDestroy {

  allHeadlines: any[] = []; 
  
  constructor(
    private headlineService: HeadlinesService
  ) { }

  ngOnInit() {

    this.getAllHeadlines();
  }

  getAllHeadlines() {
    return this.headlineService    
               .getAllHeadlines()
               .subscribe(data => {
                 
                data['headlinesData'].map(item => item.isActive = false); 

                 this.allHeadlines = data['headlinesData'];
                 
               }, err => {
                 console.log(err);
               }); 
  }; 

  toggleHeadlines(index: number) {

    const item = this.allHeadlines[index]; 

    item.isActive === false ? item.isActive = true : item.isActive = false;

  }; 

  deleteHeadlines(index: number, id: string) {
    return this.headlineService
               .deleteHeadlines(id)
               .subscribe(data => {  

                  console.log(data);
                  this.allHeadlines.splice(index, 1); 
                  
               }, err => {
                 console.log(err);
  
               })
  }


  ngOnDestroy() {

    this.getAllHeadlines().unsubscribe(); 
  }

}
