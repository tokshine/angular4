import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import {RouterModule,Routes} from '@angular/router';

import { UserComponent } from './app/components/user/user.component';

import { AboutComponent } from './app/components/about/about.component';
import { ImageSearchComponent } from './app/components/image-search/image-search.component'

import { ActivityListComponent } from './app/components/activity-list/activity-list.component';
import { MapComponent } from './app/components/map/map.component'

export const appRoutes:Routes=[
  {path:'',component:UserComponent},
  {path:'about',component:AboutComponent},
  {path:'imageSearch',component:ImageSearchComponent},
  {path:'activityList',component:ActivityListComponent},
  {path:'run/:id',component:MapComponent}
  
]
