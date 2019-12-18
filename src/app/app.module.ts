import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import {DataService} from './services/data.service';
import {ImageService} from './services/image.service';
import {ActivityService} from './services/activity.service'
import {MapService} from './services/map.service'
import { AboutComponent } from './components/about/about.component';
import { ImageSearchComponent } from './components/image-search/image-search.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { MapComponent } from './components/map/map.component'
import {appRoutes} from '../routes'
// inline approach
// const appRoutes:Routes=[
//   {path:'',component:UserComponent},
//   {path:'about',component:AboutComponent},
//   {path:'imageSearch',component:ImageSearchComponent},
//   {path:'activityList',component:ActivityListComponent},
//   {path:'run/:id',component:MapComponent}
  
// ]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ImageSearchComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService,ImageService,ActivityService,MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
