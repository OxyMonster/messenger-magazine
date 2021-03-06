import { BrowserModule } from '@angular/platform-browser';
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

import { AdsComponent } from './home/ads/ads.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadlinesComponent } from './headlines/headlines.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { HeadlineDetailsComponent } from './headlines/headline-details/headline-details.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { NewsService } from './services/news.service';
import { HeadlinesService } from './services/headlines.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './admin-panel/auth.guard';
import { EconomyComponent } from './economy/economy.component';
import { CultureComponent } from './culture/culture.component';
import { PoliticsComponent } from './politics/politics.component';
import { WeatherWidgetMainComponent } from './home/slider/weather/weather.component';
import { EconomyDetailsComponent } from './economy/economy-details/economy-details.component';
import { PoliticsDetailsComponent } from './politics/politics-details/politics-details.component';
import { CultureDetailsComponent } from './culture/culture-details/culture-details.component';
import { CurrencyComponent } from './home/slider/currency/currency.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { ImageLazyLoadModule } from './image-lazy-load/image-lazy-load.module';
import { CommercialComponent } from './home/ads/commercial/commercial.component';
import { CeiboShare } from 'ng2-social-share'; 


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    SliderComponent,
    NavigationComponent,    
    HomeComponent,
    NewsComponent,
    AboutUsComponent, 
    AdvertisementComponent,
    ContactComponent,
    NewsDetailsComponent, 
    HeadlineDetailsComponent,
    AdsComponent,
    FooterComponent,
    HeadlinesComponent,
    EconomyComponent,
    CultureComponent,
    PoliticsComponent, 
    PageNotFoundComponent,
    WeatherWidgetMainComponent,
    EconomyDetailsComponent,
    PoliticsDetailsComponent,
    CultureDetailsComponent,
    CurrencyComponent,
    CommercialComponent,
    CeiboShare
  ],
  imports: [
    AdminPanelModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    // JwSocialButtonsModule,  
    ImageLazyLoadModule, 
    
    
   
  ],
  providers: [
    NewsService,
    HeadlinesService,
    // AuthGuard 
    { provide: LocationStrategy, useClass: HashLocationStrategy }, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
