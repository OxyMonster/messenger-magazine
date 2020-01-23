import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //  * * * Get current Date 
  date = new Date();  
  month = this.date.getUTCMonth() + 1; //months from 1-12
  day = this.date.getUTCDate();
  year = this.date.getUTCFullYear();
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  isInputActive: boolean = false; 

  currentDate = this.monthNames[this.date.getMonth()] + "," + this.day + " " + this.year;

  // * * *  / * * * 
  constructor() { }

  ngOnInit() {

  }

  toggleInput() {
    return this,this.isInputActive === false ? this.isInputActive = true : this.isInputActive = false;
  }
 

}
