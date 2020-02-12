import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../home.service';
import { HeadlinesService } from 'src/app/services/headlines.service';
import { WeatherService } from 'src/app/services/weather.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {


  allHeadlineImages: any[] = []; 
  allHeadlineTitles: [] = []; 

  // * * Weather ** 
  long: any; 
  lat: any; 

  // * * Currency  * * 

  USD: number = 0; 
  GBP: number = 0; 
  RUB: number = 0;
  EURO: number = 0; 

  math = Math; 

  constructor(
    private headlinesService: HeadlinesService,
    private weatherService: WeatherService,
    private globalSerice: GlobalService
  ) { }

  ngOnInit() {
   
    this.getWeather();  
    this.getCurrencyRate();
    this.getHeadlines(); 


  }

  images: any[] = [];
  imagesTodisplay: any[] = []; 

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false; 
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }


  getHeadlines() {
    return this.headlinesService
               .getAllHeadlines()
               .subscribe(data => {
                this.allHeadlineImages = data['headlinesData'].map(item => {
                   return item
                 }); 

                 this.images = this.allHeadlineImages.map( item => { return item } ) ;
                //  if(this.images.length <= 4) {
                //    this.imagesTodisplay = [ this.images[0], this.images[1], this.images[2], this.images[3] ].reverse(); 

                //  }; 
                 
                 
               }, err => {
                 console.log(err);
                 
               })
  }; 



  getWeather() {
      this.globalSerice.getWeather();
    
      
  }; 


  getCurrencyRate() {
    return this.globalSerice
               .getCurrency()
               .subscribe(data => {
  
                 this.USD = data['usd']['inverseRate']; 
                 this.GBP = data['gbp']['inverseRate']; 
                 this.EURO = data['eur']['inverseRate'];
                 this.RUB = data['rub']['inverseRate']; 
                 
               }, err => console.log(err)); 
  }


 

ngOnDestroy(): void {

  this.getCurrencyRate().unsubscribe(); 
  this.getHeadlines().unsubscribe(); 
}
  

}
