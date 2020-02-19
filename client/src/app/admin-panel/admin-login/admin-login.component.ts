import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  @Output() result : EventEmitter<any> = new EventEmitter
 
  adminForm: FormGroup; 
  isAdmin: boolean = false; 
  showErr: boolean = false; 


  constructor(
    private fb: FormBuilder, 
    private adminService: AdminService,
    private router: Router
  ) {

    this.adminForm = this.fb.group({
      userName: '', 
      password: ''
    }); 
   
   }

  ngOnInit() {
  }


  submitForm() {

    console.log(this.adminForm.value.userName);


    this.adminService  
        .loginAdmin(this.adminForm.value)
        .subscribe( data => {
          console.log(data);
          const acessToken = data['acessToken'];  
          if ( acessToken ) {
            this.showErr = false;  
            this.result.emit(true);
            this.adminService.setToken(acessToken); 
            this.isAdmin = true; 
            this.router.navigate(['/admin/add-news'])

          } else {
            this.result.emit(false); 
            this.isAdmin = false; 
            
          }

          
          
        }, err => {
          this.showErr = true;  
          this.isAdmin = false
          this.result.emit(false); 
          console.log("wrong form");


        } ); 

  } 


}
