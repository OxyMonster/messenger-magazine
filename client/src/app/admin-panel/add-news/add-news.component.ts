import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  newsForm: FormGroup; 
  fileToUpload: File; 
  isFormSubmited: boolean = false; 
  isImgValid: boolean = false; 


  constructor(
    private fb: FormBuilder, 
    private newsService: NewsService

  ) {
    this.newsForm = this.fb.group({ 
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
``
    this.newsForm.value.file = formData; 

    if( this.fileToUpload.type.includes('file/png') || this.fileToUpload.type.includes('file/jpeg') ) {

      this.isImgValid = true; 
    } else {
      this.isImgValid = false; 
    }
    
  
    
  };



  onSubmit() {

    const fd = new FormData(); 
    fd.append('file', this.fileToUpload); 
    fd.append('title', this.newsForm.get('title').value);
    fd.append('description', this.newsForm.get('description').value);
    fd.append('date', this.newsForm.get('date').value); 


    if( this.isImgValid ) {

      this.newsService
          .addNews(fd) 
          .subscribe(data => {
            
            console.log(data);
            this.isFormSubmited = true; 
            this.newsForm.reset(); 
            
          }, err => {
            console.log(err);
          }); 
    }
    
        
    
  }; 

  submitFormAgain() {
    return this.isFormSubmited = false; 
    
  } 

}
