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
      ] }
]

const COMPONENTS = [
  AddNewsComponent, 
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
    AddEconomyComponent
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
