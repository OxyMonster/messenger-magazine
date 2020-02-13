import { Component, OnInit } from '@angular/core';
import { PoliticsService } from 'src/app/services/politics.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-politics-details',
  templateUrl: './politics-details.component.html',
  styleUrls: ['./politics-details.component.scss', '../../news/news.component.scss']
})
export class PoliticsDetailsComponent implements OnInit {

  politics: any[] = []; 
  politicsID: string; 

  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private politicsService : PoliticsService, 
    private router: ActivatedRoute
  ) { }

  ngOnInit() {

    this.politicsID = this.router.snapshot.params.id; 
    this.getPoliticsById(); 
  }


  getPoliticsById() {
    return this.politicsService
               .getPoliticsById(this.politicsID)
               .pipe( takeUntil(this.ngUnsubscribe) )
               .subscribe( data => {
                 this.politics = [data]; 
                 console.log(this.politics); 
                 
               }, err => console.log(err) )


  }




}
