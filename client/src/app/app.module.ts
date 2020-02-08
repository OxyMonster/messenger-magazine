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
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HeadlineDetailsComponent } from './headlines/headline-details/headline-details.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
 

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
    AdminPanelComponent,
  ],
  imports: [
    AdminPanelModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }, 
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
