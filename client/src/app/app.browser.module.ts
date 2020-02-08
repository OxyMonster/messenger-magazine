import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './home/slider/slider.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ContactComponent } from './contact/contact.component';
// import { MainNewsComponent } from './home/main-news/main-news.component';
// import { PopularNewsComponent } from './home/popular-news/popular-news.component';
import { AdsComponent } from './home/ads/ads.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadlinesComponent } from './headlines/headlines.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppModule } from './app.module';
 

@NgModule({
  imports: [
    AdminPanelModule,
    
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    AppModule,
    BrowserTransferStateModule
  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
