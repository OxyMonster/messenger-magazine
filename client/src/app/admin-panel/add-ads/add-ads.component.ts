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
  isImgValid: boolean = false; 
  showErr: boolean = false; 


  constructor(
    private fb: FormBuilder,
    private adsService: AdsService
  ) { 
    
    this.adsFrom = this.fb.group({
      linkPath: '',
      // file: null 
    }); 
  }

  ngOnInit() {

  }


  onFileUpload(files: File) {

    this.fileToUpload = files[0];
    
    const formData = new FormData(); 
    formData.append('file', this.fileToUpload); 

    this.adsFrom.value.file = formData; 
    
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
    fd.append('linkPath', this.adsFrom.get('linkPath').value); 
    fd.append('file', this.fileToUpload );
    console.log(fd);
    
    if ( this.isImgValid ) {   
      this.adsService  
          .addAds(fd) 
          .subscribe(data => {
                   
            console.log(data);
            this.isFormSubmited = true; 
            this.adsFrom.reset(); 
            
          }, err => {
            console.log(err);
          }); 
      
    } 
        
    
  }; 

  submitFormAgain() {
    return this.isFormSubmited = false; 
    
  }

}
