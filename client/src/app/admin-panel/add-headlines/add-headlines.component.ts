import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeadlinesService } from 'src/app/services/headlines.service';

@Component({
  selector: 'app-add-headlines',
  templateUrl: './add-headlines.component.html',
  styleUrls: ['./add-headlines.component.scss']
})
export class AddHeadlinesComponent implements OnInit {

  headlinesForm: FormGroup; 
  fileToUpload: File = null;

  isFormSubmitted: boolean = false; 


  constructor(
    private fb: FormBuilder,
    private headlineService: HeadlinesService

  ) {
    this.headlinesForm = this.fb.group({
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
    console.log(this.fileToUpload);
    
    
  }


  onSubmit() {
    
    const fd = new FormData(); 
    fd.append('file', this.fileToUpload); 
    fd.append('title', this.headlinesForm.get('title').value);
    fd.append('description', this.headlinesForm.get('description').value);
    fd.append('date', this.headlinesForm.get('date').value); 




    this.headlineService
        .addHeadlines(fd)
        .subscribe(data => {

          console.log(data);
          this.isFormSubmitted = true; 
          this.headlinesForm.reset();
          
        }, err => {
          console.log(err);
          
        }); 
    
    
  }; 

  submitFormAgain() {
    return this.isFormSubmitted = false; 
  }; 

}
