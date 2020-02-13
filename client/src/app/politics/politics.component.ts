import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AdminService } from '../services/admin.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss', '../news/news.component.scss']
})
export class PoliticsComponent implements OnInit {

 
  allPoltics: any[]  = []; 
  
  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private adminService: AdminService,
    private router : Router
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
          this.allPoltics = data['politicsData'].reverse(); 
          
        }, err => console.log(err)); 
  }; 


  routeToPolitics(id: string) {  
    console.log('In route');
    this.router.navigate([`/politics/${id}`]); 

    
  }


}
