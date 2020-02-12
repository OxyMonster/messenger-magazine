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
  isActive: boolean = false; 

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

  deleteCulture(index: number, id: string) {
    return this.adminService
               .removeCulture(id)
               .subscribe(data => {  

                  console.log(data);
                  this.allCulture.splice(index, 1); 
                  
               }, err => {
                 console.log(err);
  
               })
  }


  


  ngOnDestroy() {
    this.getAllCulture().unsubscribe();
  }

}
