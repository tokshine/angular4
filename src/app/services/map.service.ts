import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IActivity } from '../shared/activity.model';
import { SAVED_ACTIVITIES } from '../shared/activities';
@Injectable()
export class MapService {
  
  constructor() { }

  getActivity(id: number):IActivity{
    console.log("loading data has issue????");
  
    return SAVED_ACTIVITIES.slice(0).find(run => run.id == id)
  }

}
