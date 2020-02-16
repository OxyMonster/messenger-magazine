import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isMenuActive: boolean = false; 

  constructor() { }

  ngOnInit() {

  }

  toggleMenu(type: string) {

    if(type === 'open') {
      this.isMenuActive = true
      console.log(this.isMenuActive);

      console.log("open");
      
    } else {
      this.isMenuActive = false
      console.log(this.isMenuActive);
      
      console.log('close');
      
    }

    // this.isMenuActive === false ? this.isMenuActive = true : this.isMenuActive = false; 

  }




}
