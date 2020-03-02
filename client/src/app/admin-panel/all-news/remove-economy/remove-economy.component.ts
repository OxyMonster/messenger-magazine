import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-remove-economy',
  templateUrl: './remove-economy.component.html',
  styleUrls: ['./remove-economy.component.scss']
})
export class RemoveEconomyComponent implements OnInit {

  allEconomy: any[] = []; 
  allFilteredEconomy: any[] = []; 
  isFilterActive: boolean = false; 
  searcKey: any; 

  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.getAllCulture(); 
  }


  getAllCulture() {

  return this.adminService
             .getAllEconomy()
             .pipe( takeUntil(this.ngUnsubscribe) )  
             .subscribe(data => {
                   console.log(data);
                   this.allEconomy = data['economyData']; 
          
          })

  }; 


  toggle(index: number) {

    const item = this.allEconomy[index]; 

    item.isActive === false ? item.isActive = true : item.isActive = false;

  }; 

  toggleFiltered(index: number) {
    
    const item = this.allFilteredEconomy[index]; 
    item['isActive'] === false ? item['isActive'] = true : item['isActive'] = false; 
   
    
  }; 

  deleteEconomy(index: number, id: string) {
    return this.adminService
               .removeEconomy(id)
               .subscribe(data => {  

                  console.log(data);
                  this.allEconomy.splice(index, 1); 
                  
               }, err => {
                 console.log(err);
  
               })
  }


  filterEconomy(keyword: string) {

    this.allFilteredEconomy = this.allEconomy.filter( item =>  {
 
       if ( item.title.trim().toLocaleLowerCase() === keyword.trim().toLocaleLowerCase() ) {
           
           this.isFilterActive = true;
           return item; 
           
         }; 
    }); 
   }; 
 
 
   showAllEconomy() {
     this.isFilterActive = false
   }


  

  


  ngOnDestroy() {
    this.getAllCulture().unsubscribe();
  }

}
