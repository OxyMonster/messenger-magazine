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

  allHeadlines :[] = []; 
  isHeadlinesPage: boolean = false; 

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
            
                 this.allHeadlines = data['headlinesData'].reverse(); 
                 console.log(this.allHeadlines);
                 
               }, err => {
                 console.log(err);
                 
               })
  }; 


  routeToHeadlineDetails(headlineID: string) {
    console.log(headlineID); 
    this.router.navigate([`/headlines/${headlineID}`]); 
    
  }


  ngOnDestroy(): void {
    
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    
  }


}
