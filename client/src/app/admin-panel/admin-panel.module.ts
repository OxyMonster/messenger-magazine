import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddHeadlinesComponent } from './add-headlines/add-headlines.component';

import { AllNewsComponent } from './all-news/all-news.component';
import { AllHeadlinesComponent } from './all-headlines/all-headlines.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuard } from './auth.guard';
import { CultureComponent } from '../culture/culture.component';
import { PoliticsComponent } from '../politics/politics.component';
import { AddPoliticsComponent } from './add-politics/add-politics.component';
import { AddCultureComponent } from './add-culture/add-culture.component';
import { AddEconomyComponent } from './add-economy/add-economy.component';
import { RemoveCultureComponent } from './all-news/remove-culture/remove-culture.component';
import { RemoveEconomyComponent } from './all-news/remove-economy/remove-economy.component';
import { RemovePoliticsComponent } from './all-news/remove-politics/remove-politics.component';
import { RemoveNewsComponent } from './all-news/remove-news/remove-news.component';
import { AddAdsComponent } from './add-ads/add-ads.component';
import { AllAdsComponent } from './all-ads/all-ads.component';

  
const routes: Routes = [
     { path: 'admin-login', component: AdminLoginComponent,  },  

     { path: 'admin', component: AdminPanelComponent, 
       children: [
        { path: 'add-news', component: AddNewsComponent, },
        { path: 'add-headlines', component: AddHeadlinesComponent,  },
        { path: 'add-culture', component: AddCultureComponent,  },
        { path: 'add-economy', component: AddEconomyComponent,  },
        { path: 'add-politics', component: AddPoliticsComponent,  },
        { path: 'all-news', component: AllNewsComponent, },
        { path: 'all-headlines', component: AllHeadlinesComponent, },
        { path: 'remove-culture', component: RemoveCultureComponent, },
        { path: 'remove-economy', component: RemoveEconomyComponent, },
        { path: 'remove-politics', component: RemovePoliticsComponent, },
        { path: 'remove-news', component: RemoveNewsComponent, },
        { path: 'add-ads', component: AddAdsComponent, },
        { path: 'all-ads', component: AllAdsComponent, },
      ] }
]

const COMPONENTS = [
    AddNewsComponent, 
    RemoveCultureComponent,
    RemoveEconomyComponent,
    RemovePoliticsComponent,
    RemoveNewsComponent,
    AddHeadlinesComponent, 
    AllNewsComponent, 
    AllHeadlinesComponent, 
    AllNewsComponent, 
    AllHeadlinesComponent, 
    AdminNavigationComponent,
    AdminPanelComponent, 
    AdminLoginComponent,
    AddPoliticsComponent,
    AddCultureComponent,
    AddEconomyComponent,
    AddAdsComponent,
    AllAdsComponent,
]


@NgModule({
  declarations: 
    COMPONENTS
  ,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ], 
  providers: [
    AuthGuard
  ], 
  exports: [
    COMPONENTS,
    RouterModule,
  ]
})


export class AdminPanelModule { }
