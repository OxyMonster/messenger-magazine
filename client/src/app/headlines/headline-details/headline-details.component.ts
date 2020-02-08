import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeadlinesService } from 'src/app/services/headlines.service';

@Component({
  selector: 'app-headline-details',
  templateUrl: './headline-details.component.html',
  styleUrls: ['../headlines.component.scss']
})
export class HeadlineDetailsComponent implements OnInit {

  headlineID: string; 
  headlineData: any = {}; 

  constructor(
    private headlinesService: HeadlinesService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(
  ) {
    this.headlineID = this.router.snapshot.params.id; 
    console.log(this.headlineID);
    this.getHeadlineByID();
    
  }



  getHeadlineByID() {
    this.headlinesService
        .getHeadlineById(this.headlineID)
        .subscribe(data => {

          console.log(data);
          this.headlineData = data; 
        
          
          
        }, err => {
          console.log(err);
          
        })
  }

}
