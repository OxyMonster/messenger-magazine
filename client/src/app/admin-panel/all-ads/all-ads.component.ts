import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss']
})
export class AllAdsComponent implements OnInit {


  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  allAds: any[] = []

  constructor(
    private adsService: AdsService
  ) { }

  ngOnInit() {

    this.getAllAds(); 

  }


  getAllAds() {
    return this.adsService
               .getAllAds()
               .pipe( takeUntil(this.ngUnsubscribe) )
               .subscribe(data => {
                 console.log(data);
                 
               }, err => console.log(err))
  }; 

  

}