import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';
import { HeadlinesService } from '../services/headlines.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit, OnDestroy {

  allHeadlines : any[] = []; 
  isHeadlinesPage: boolean = false; 
  isShowAllHeadlinesActive: boolean = false; 

  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  


  constructor(
    public router: Router,
    private headlinesService: HeadlinesService
  ) { }

  ngOnInit() {

    this.router.url === '/headlines' ? this.isHeadlinesPage = true : this.isHeadlinesPage = false; 
    this.getAllHeadlines(); 
 
  }

  getAllHeadlines() {
    return this.headlinesService
               .getAllHeadlines()
               .pipe( takeUntil (this.ngUnsubscribe) )
               .subscribe(data => {

                if ( this.router.url !== '/home' ) {
                   
                  this.allHeadlines = data['headlinesData'].reverse();
                  console.log(this.allHeadlines);
                  this.isShowAllHeadlinesActive = false; 
                
                 } else {
                   let newsData  = data['headlinesData'].reverse()
                   
                   if ( newsData.length >= 8 ) {
                     
                     this.allHeadlines = [ newsData[0], 
                                           newsData[1], 
                                           newsData[2], 
                                           newsData[3], 
                                           newsData[4], 
                                           newsData[5],  
                                           newsData[6],  
                                           newsData[7],  
                      
                                          ];
                     this.isShowAllHeadlinesActive = true;  
                   } else {

                     this.allHeadlines = newsData; 
                   
                   }
       
                   console.log(this.allHeadlines);
                   
                
                 }

                 
               }, err => {
                 console.log(err);
                 
               })
  }; 


  routeToHeadlineDetails(headlineID: string) {
    console.log(headlineID); 
    this.router.navigate([`/headlines/${headlineID}`]); 
    
  }

  navigateToHeadlines() {
    return this.router.navigate(['/headlines']); 
  }


  ngOnDestroy(): void {
    
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    
  }


}
