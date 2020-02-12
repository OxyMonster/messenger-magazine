import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AdminService } from '../services/admin.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss', '../news/news.component.scss']
})
export class PoliticsComponent implements OnInit {

 
  allPoltics: any[]  = []; 
  
  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.getAllPolitics(); 
  }

  getAllPolitics() {
    this.adminService
        .getAllPolitics()
        .pipe( takeUntil(this.ngUnsubscribe) )
        .subscribe(data => {
          console.log(data);
          this.allPoltics = data['politicsData']; 
          
        }, err => console.log(err)); 
  }; 

}
