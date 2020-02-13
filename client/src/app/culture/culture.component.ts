import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss', '../news/news.component.scss']
})
export class CultureComponent implements OnInit {

  allCulutre: []  = []; 

  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllCulture(); 
  }

  getAllCulture() {
    this.adminService
        .getCulture()
        .pipe( takeUntil(this.ngUnsubscribe) )
        .subscribe(data => {
          console.log(data);
          this.allCulutre = data['cultureData'].reverse(); 
          
        }, err => console.log(err)); 
  }; 


  routeToCulture(id: string) {  
    console.log('In route');
    this.router.navigate([`/culutre-lifystyle/${id}`]); 

    
  }



}
