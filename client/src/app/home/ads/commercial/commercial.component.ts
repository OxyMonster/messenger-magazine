import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {

  allAds: any[] = [];  
  
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private adsService :AdsService

  ) { }

  ngOnInit() {
    this.getAllAds(); 
  }

  getAllAds() {
    this.adsService
         .getAllAds()
        .pipe( takeUntil(this.ngUnsubscribe) )
         .subscribe( data => {

            this.allAds = [data]; 
         }, err => console.log(err)); 

  }; 

}
