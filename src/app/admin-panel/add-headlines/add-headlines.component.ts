import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminPanelService } from '../admin-panel.service';

@Component({
  selector: 'app-add-headlines',
  templateUrl: './add-headlines.component.html',
  styleUrls: ['./add-headlines.component.scss']
})
export class AddHeadlinesComponent implements OnInit {

  headlinesForm: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private adminService: AdminPanelService

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


  onSubmit(headlinesForm) {
    this.adminService
        .addHeadlines(headlinesForm.value)
        .subscribe(data => {
          console.log(data);
          
        }, err => {
          console.log(err);
        }); 
    
    
  }

}
