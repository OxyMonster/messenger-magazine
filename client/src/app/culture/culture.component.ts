import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss', '../news/news.component.scss']
})
export class CultureComponent implements OnInit {

  allCulutre: []  = []; 

  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private adminService: AdminService
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
          this.allCulutre = data['cultureData']; 
          
        }, err => console.log(err)); 
  }

}
