import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Dataservice connected...');
  }

  getPosts() {
//this http.get returns an observable collection
// a collection that arrives over time
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res=>res.json());
  }

}
