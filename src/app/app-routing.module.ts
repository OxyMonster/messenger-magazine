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
  { path: 'home', component: HomeComponent, data: { animation: 'isLeft' }  },
  { path: 'news', component: NewsComponent, data: { animation: 'isRight' } },
  { path: 'headlines', component: HeadlinesComponent, data: { animation: 'isLeft' } },
  { path: 'about-us', component: AboutUsComponent, data: { animation: 'isRight' } },
  { path: 'advertisement', component: AdvertisementComponent, data: { animation: 'isRight' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'isLeft' }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
