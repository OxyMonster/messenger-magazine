import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdsService } from 'src/app/services/ads.service';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {


  adsFrom: FormGroup
  fileToUpload: File; 
  isFormSubmited: boolean = false; 



  constructor(
    private fb: FormBuilder,
    private adsService: AdsService
  ) { 
    
    this.adsFrom = this.fb.group({
      linkPath: '',
      file: null 
    }); 
  }

  ngOnInit() {

  }


  onFileUpload(files: File) {

    this.fileToUpload = files[0];
    
    const formData = new FormData(); 
    formData.append('file', this.fileToUpload); 

    this.adsFrom.value.file = formData; 
    
  
    
  };



  onSubmit() {

    const fd = new FormData(); 
    fd.append('linkPath', this.fileToUpload); 
    fd.append('description', this.adsFrom.get('description').value);

    
    this.adsService
        .addAds(fd) 
        .subscribe(data => {
          
          console.log(data);
          this.isFormSubmited = true; 
          this.adsFrom.reset(); 
          
        }, err => {
          console.log(err);
        }); 
        
    
  }; 

  submitFormAgain() {
    return this.isFormSubmited = false; 
    
  }

}
