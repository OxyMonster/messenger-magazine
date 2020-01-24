import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Subscription } from 'rxjs';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ContactComponent } from './contact/contact.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'isLeft' }  },
  { path: 'news', component: NewsComponent, data: { animation: 'isRight' } },
  { path: 'about-us', component: AboutUsComponent, data: { animation: 'isLeft' } },
  { path: 'subscription', component: SubscriptionComponent, data: { animation: 'isRight' } },
  { path: 'advertisement', component: AdvertisementComponent, data: { animation: 'isLeft' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'isRight' }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
