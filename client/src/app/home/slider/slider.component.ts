import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../home.service';
import { HeadlinesService } from 'src/app/services/headlines.service';
import { GlobalService } from 'src/app/services/global.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private headlinesService: HeadlinesService,
    private globalSerice: GlobalService
  ) { }

  ngOnInit() {  
    
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
               .pipe( takeUntil(this.ngUnsubscribe) )  
               .subscribe(data => {
                this.allHeadlineImages = data['headlinesData'].map(item => {
                   return item
                 }); 

                 this.images = this.allHeadlineImages.map( item => { return item } ).reverse(); ;
                 
                 
               }, err => {
                 console.log(err);
                 
               })
  }; 



 

ngOnDestroy(): void {

  this.getHeadlines().unsubscribe(); 
}
  

}
