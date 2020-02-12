import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-remove-politics',
  templateUrl: './remove-politics.component.html',
  styleUrls: ['./remove-politics.component.scss']
})
export class RemovePoliticsComponent implements OnInit {

  allPolitics: any[] = []; 

  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.getAllCulture(); 
  }


  getAllCulture() {

  return this.adminService
             .getAllPolitics()
             .subscribe(data => {
                   console.log(data);
                   this.allPolitics = data['politicsData']; 
          
          })

  }; 

  toggle(index: number) {

    const item = this.allPolitics[index]; 

    item.isActive === false ? item.isActive = true : item.isActive = false;

  }; 

  deletePolitics(index: number, id: string) {
    return this.adminService
               .removePolitics(id)
               .pipe( takeUntil(this.ngUnsubscribe) ) 
               .subscribe(data => {  

                  console.log(data);
                  this.allPolitics.splice(index, 1); 
                  
               }, err => {
                 console.log(err);
  
               })
  }


  

  


  ngOnDestroy() {
    this.getAllCulture().unsubscribe();
  }

}
