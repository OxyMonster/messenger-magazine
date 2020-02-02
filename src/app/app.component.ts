import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { fader } from './route-animations'; 

@Component({
  selector: 'app-root',
  animations: [ 
    fader
   
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'messenger-magazine-app';
  isAdminActive: boolean = false; 

  constructor(

    private router: Router

  ) {

  }
  
  ngOnInit(): void {

    this.router.events.subscribe((url:any) => {
      
      url.url === '/admin' || this.router.url === '/admin' ? this.isAdminActive = true : this.isAdminActive = false;
      console.log(this.isAdminActive);
      
    });
    

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
