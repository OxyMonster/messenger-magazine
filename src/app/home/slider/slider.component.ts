import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  allHeadlineImages: any[] = []; 
  allHeadlineTitles: [] = []; 


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getHeadlines(); 
  }

  images: any[] = [];

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
    return this.homeService
               .getAllHeadlines()
               .subscribe(data => {
                this.allHeadlineImages = data['headlinesData'].map(item => {
                   return item
                 }); 

                 this.images = this.allHeadlineImages.map( item => { return item } ) ;
                 console.log(this.images);
                 
                 
               }, err => {
                 console.log(err);
                 
               })
  }

}
