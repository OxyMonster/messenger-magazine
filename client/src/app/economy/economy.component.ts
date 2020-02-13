import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AdminService } from '../services/admin.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.scss', '../news/news.component.scss']
})
export class EconomyComponent implements OnInit {

  allEconomy: any[]  = []; 
  
  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private adminService: AdminService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllEconomy(); 
  }

  getAllEconomy() {
    this.adminService
        .getAllEconomy()
        .pipe( takeUntil(this.ngUnsubscribe) )
        .subscribe(data => {
          console.log(data);
          this.allEconomy = data['economyData'].reverse(); 
          
        }, err => console.log(err)); 
  }; 


  routeToEconomyDetails(id: string) {  
    console.log('In route');
    this.router.navigate([`/economy/${id}`]); 

    
  }

}
