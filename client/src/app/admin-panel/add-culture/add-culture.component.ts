import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-culture',
  templateUrl: './add-culture.component.html',
  styleUrls: ['./add-culture.component.scss']
})
export class AddCultureComponent implements OnInit {
  
  cultureFrom: FormGroup; 
  fileToUpload: File; 
  isFormSubmited: boolean = false; 
  isImgValid: boolean = false; 
  showErr: boolean = false; 

  constructor(
    private fb: FormBuilder, 
    private adminService: AdminService

  ) {
    this.cultureFrom = this.fb.group({ 
      title: '',
      description: '',
      date: '',
      file: null 
    })
   }

  ngOnInit() {
    
  }
 

  onFileUpload(files: File) {

    this.fileToUpload = files[0];
    
    const formData = new FormData(); 
    formData.append('file', this.fileToUpload); 

    this.cultureFrom.value.file = formData; 

     if( this.fileToUpload.type === 'image/png' || this.fileToUpload.type === 'image/jpeg' ) {

      this.isImgValid = true; 
      console.log("VALID");
      this.showErr = false; 
    } else {
      this.isImgValid = false;
      this.showErr = true; 
       
    }
  
    
  };



  onSubmit() {

    const fd = new FormData(); 
    fd.append('file', this.fileToUpload); 
    fd.append('title', this.cultureFrom.get('title').value);
    fd.append('description', this.cultureFrom.get('description').value);
    fd.append('date', this.cultureFrom.get('date').value); 


    if ( this.isImgValid ) {

      this.adminService
          .addCulture(fd) 
          .subscribe(data => {
            
            console.log(data);
            this.isFormSubmited = true; 
            this.cultureFrom.reset(); 
            
          }, err => {
            console.log(err);
          }); 
    }
    
        
    
  }; 

  submitFormAgain() {
    return this.isFormSubmited = false; 
    
  } 

}
