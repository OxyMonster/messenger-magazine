import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-commerial',
  templateUrl: './commerial.component.html',
  styleUrls: ['./commerial.component.scss']
})
export class CommerialComponent implements OnInit {

  allAds: any[] = [];  

  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private adsService :AdsService
  ) { }

  ngOnInit() {

    // this.getAllAds(); 

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
