import { Component, OnInit } from '@angular/core';
import { EconomyService } from 'src/app/services/economy.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-economy-details',
  templateUrl: './economy-details.component.html',
  styleUrls: ['./economy-details.component.scss', '../../news/news.component.scss']
})
export class EconomyDetailsComponent implements OnInit {

  economies: any[] = []
  economyID: string; 

  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private economyService: EconomyService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {

    this.economyID = this.router.snapshot.params.id; 
    this.getEconomyById();  

  }


  getEconomyById() {
    return this.economyService
               .getEconomyById(this.economyID)
               .pipe( takeUntil(this.ngUnsubscribe) )
               .subscribe( data => {
                 
                 this.economies = [data]; 
                 console.log(this.economies);
               }, err => console.log(err) ); 

  }; 

}
