import { Component, OnInit, Inject } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {

  allAds: any[] = [];  
  
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private adsService :AdsService,
    private router :Router,
    // @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.getAllAds(); 
  }

  getAllAds() {
    this.adsService
         .getAllAds()
        .pipe( takeUntil(this.ngUnsubscribe) )
         .subscribe( data => {
            // console.log(data);
            
            this.allAds = data['adsData']; 
            console.log(this.allAds);
            
         }, err => console.log(err)); 

  }; 


  linkToUrl(url) {
    console.log(url);
    return window.location.href  = url;
  }

}
