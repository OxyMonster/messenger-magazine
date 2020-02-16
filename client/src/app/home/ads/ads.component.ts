import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  constructor(
    private adsService: AdsService
  ) { }

  ngOnInit() {

    this.getAllAds();

  }

  getAllAds() {
    this.adsService
        .getAllAds()
        .subscribe( data => {
          console.log(data);
          
        },err => console.log(err) );
  }

}
