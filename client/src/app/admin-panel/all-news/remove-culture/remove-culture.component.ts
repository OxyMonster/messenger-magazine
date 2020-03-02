import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-remove-culture',
  templateUrl: './remove-culture.component.html',
  styleUrls: ['./remove-culture.component.scss']
})
export class RemoveCultureComponent implements OnInit, OnDestroy {

  allCulture: any[] = []; 
  allFilteredCulture: any[] = []; 
  isFiltered: boolean = false; 
  isActive: boolean = false; 
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
             .getCulture()
             .pipe( takeUntil(this.ngUnsubscribe) )  
             .subscribe(data => {
                   console.log(data);
                   this.allCulture = data['cultureData'];
                   this.allCulture.map( item => item.isActive = false ) 
          
          })

  }; 

  toggle(index: number) {

    const item = this.allCulture[index]; 

    item.isActive === false ? item.isActive = true : item.isActive = false;

  }; 

  toggleFiltered(index: number) {
    
    const item = this.allFilteredCulture[index]; 
    item['isActive'] === false ? item['isActive'] = true : item['isActive'] = false; 
   
    
  }; 

  deleteCulture(index: number, id: string) {
    return this.adminService
               .removeCulture(id)
               .subscribe(data => {  

                  console.log(data);
                  this.allCulture.splice(index, 1); 
                  
               }, err => {
                 console.log(err);
  
               })
  };


  filterCulture(keyword: string) {

    this.allFilteredCulture = this.allCulture.filter( item =>  {
 
       if ( item.title.trim().toLocaleLowerCase() === keyword.trim().toLocaleLowerCase() ) {
           
           this.isFiltered = true;
           return item; 
           
         }; 
    }); 
   }; 
 
 
   showAllCulture() {
     this.isFiltered = false
   }



  


  ngOnDestroy() {
    this.getAllCulture().unsubscribe();
  }

}
