import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../services/image.service'
import { error } from 'selenium-webdriver';
@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
 images :any[];
 imagesFound:boolean=false;
 searching:boolean=false;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  handleSuccess(data)
  {
    this.imagesFound= true;
    this.images = data.hits;
  }

  handleError(error)
  {
    console.log(error);
  }
  searchImages(query:string){
    this.searching=true;
      return this.imageService.getImages(query).subscribe(data=> 
        this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching=false
      
      // return this.imageService.getImages(query).subscribe(data=> console.log(data),
      // error => console.log(error),
      // () =>  console.log("Request complete")   
    )
  }
}
