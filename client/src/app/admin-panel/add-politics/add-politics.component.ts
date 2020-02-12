import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-politics',
  templateUrl: './add-politics.component.html',
  styleUrls: ['./add-politics.component.scss']
})
export class AddPoliticsComponent implements OnInit {


  politicsForm: FormGroup; 
  fileToUpload: File; 
  isFormSubmited: boolean = false; 


  constructor(
    private fb: FormBuilder, 
    private adminService: AdminService

  ) {
    this.politicsForm = this.fb.group({ 
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

    this.politicsForm.value.file = formData; 
    
  
    
  };



  onSubmit() {

    const fd = new FormData(); 
    fd.append('file', this.fileToUpload); 
    fd.append('title', this.politicsForm.get('title').value);
    fd.append('description', this.politicsForm.get('description').value);
    fd.append('date', this.politicsForm.get('date').value); 



    
    this.adminService
        .addPolitics(fd) 
        .subscribe(data => {
          
          console.log(data);
          this.isFormSubmited = true; 
          this.politicsForm.reset(); 
          
        }, err => {
          console.log(err);
        }); 
        
    
  }; 

  submitFormAgain() {
    return this.isFormSubmited = false; 
    
  } 

}
