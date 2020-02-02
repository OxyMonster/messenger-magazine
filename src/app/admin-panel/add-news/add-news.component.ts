import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminPanelService } from '../admin-panel.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  newsForm: FormGroup

  constructor(
    private fb: FormBuilder, 
    private adminService: AdminPanelService

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


  onSubmit(newsForm) {
    
    console.log(newsForm.value);
    this.adminService
        .addNews(newsForm.value) 
        .subscribe(data => {
          console.log(data);
          
        }, err => {
          console.log(err);
        }); 
        
    
  }

}
