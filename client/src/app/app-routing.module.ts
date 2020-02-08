import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ContactComponent } from './contact/contact.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HeadlineDetailsComponent } from './headlines/headline-details/headline-details.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: '1' }  },
  { path: 'news', component: NewsComponent, data: { animation: '2' } },
  { path: 'news/:id', component: NewsDetailsComponent, data: { animation: '3' } },
  { path: 'headlines', component: HeadlinesComponent,   data: { animation: '4' } }, 
  { path: 'headlines/:id', component: HeadlineDetailsComponent }, 
  { path: 'about-us', component: AboutUsComponent, data: { animation: '5' }  },
  { path: 'advertisement', component: AdvertisementComponent, data: { animation: '6' } },
  { path: 'contact', component: ContactComponent, data: { animation: '7' } },
  { path: '**', redirectTo: '/404' }, 
  { path: '404',  component: PageNotFoundComponent, data: { animation: '8' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
