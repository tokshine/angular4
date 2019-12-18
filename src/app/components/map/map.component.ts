import { Component, OnInit,AfterViewInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' 
import { IActivity } from '../../shared/activity.model';
import {MapService} from '../../services/map.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private mapService:MapService,private route:ActivatedRoute) { }
  activity: IActivity;
  activityName: string;
  activityComments: string;
  activityDate: Date;
  activityDistance: number;
  gpx: any;

  ngOnInit() {
    //alert(this.route.snapshot.params['id']);
    
    //console.log('param id' + this.route.snapshot.params['id'] );
    this.activity = this.mapService.getActivity(+this.route.snapshot.params['id']);
    //console.log(this.activity.id);
  }

  ngAfterViewInit(){
    // this.mapService.plotActivity(+this.route.snapshot.params['id']);
    // this.activityName = this.activity.name;
    // this.activityComments = this.activity.comments;
    // this.activityDistance = this.activity.distance;
    // this.activityDate = this.activity.date;
    // this.gpx = this.activity.gpxData;
  }

}
