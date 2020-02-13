import { Component, OnInit } from '@angular/core';
import { CultureService } from 'src/app/services/culture.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-culture-details',
  templateUrl: './culture-details.component.html',
  styleUrls: ['./culture-details.component.scss', '../../news/news.component.scss']
})
export class CultureDetailsComponent implements OnInit {

  cultures: any[] = []
  cultureId: string; 

  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private cultureSerice: CultureService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {

    this.cultureId = this.router.snapshot.params.id; 
    this.getEconomyById();  

  }


  getEconomyById() {
    return this.cultureSerice
               .getCultureById(this.cultureId)
               .pipe( takeUntil(this.ngUnsubscribe) )
               .subscribe( data => {
                 
                 this.cultures = [data]; 
                 console.log(this.cultures);
               }, err => console.log(err) ); 

  }; 

}
