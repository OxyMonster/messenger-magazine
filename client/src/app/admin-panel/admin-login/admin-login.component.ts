import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

 
  adminForm: FormGroup; 
  isAdmin: boolean = false; 

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


  // submitForm() {

  //   console.log(this.adminForm.value.userName);
    

  //   if( this.adminForm.value.userName.length > 0 && this.adminForm.value.password.length > 0 ) 

  //   this.adminService
  //       .loginAdmin(this.adminForm.value)
  //       .subscribe( data => {
  //         console.log(data);
          
  //         if ( data['accessToken'] ) {
  //           this.adminService.setToken(data); 
  //           this.isAdmin = true; 
  //           this.router.navigate(['/admin/add-news'])

  //         } else {
            
  //         }

          
          
  //       }, err => this.isAdmin = false ); 

  // } 


}
