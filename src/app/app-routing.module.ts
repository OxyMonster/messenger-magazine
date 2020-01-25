import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ContactComponent } from './contact/contact.component';
import { HeadlinesComponent } from './headlines/headlines.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: '1' }  },
  { path: 'news', component: NewsComponent, data: { animation: '2' } },
  { path: 'headlines', component: HeadlinesComponent,  data: { animation: '3' } },
  { path: 'about-us', component: AboutUsComponent, data: { animation: '4' }  },
  { path: 'advertisement', component: AdvertisementComponent, data: { animation: '5' } },
  { path: 'contact', component: ContactComponent, data: { animation: '6' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
