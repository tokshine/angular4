import { Injectable } from '@angular/core';
import {environment} from  '../../environments/environment'
import {Http,Headers} from '@angular/http'
import 'rxjs/add/operator/map'
@Injectable()
export class ImageService {
 private query:string;
 private API_KEY:string= environment.PIXABAY_API_KEY;
 private API_URL:string=environment.PIXABAY_API_URL;
 private URL:string = this.API_URL + this.API_KEY + "&q=";
 private perPage :string="&per_page=10";//kind of sloppy cos it is hardcoded
  constructor(private http:Http ) { }


  getImages(query) {
    //this http.get returns an observable collection
    // a collection that arrives over time
        return this.http.get(this.URL + query+this.perPage)
        .map(res=>res.json());
      }
    

}
