import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
import { Body } from '@angular/http/src/body';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  someVar:any;
  hobbies: string[];
  isEdit:boolean=false;
  posts:Post[];
  address: Address;
  constructor(private dataService:DataService) {
    console.log('user component constructor');
    
  }

  ngOnInit() {
    console.log('user component init');
    this.name = 'John Ade';
    this.age = 10;
    this.email = "a@b.com";
    this.address = {
      street: 'the street',
      city: 'the citytr',
      state: 'the state'
    };
    this.hobbies = ['music1', 'music2', 'music3'];
    this.dataService.getPosts().subscribe((posts)=> {
      this.posts = posts;
    });

  }
  onClick() {
    this.name = "Brad Adesimi";
    this.hobbies.push('New hobby');
  }
  addHobby(hobbyForm) {   
    alert('one way binding');
    this.hobbies.unshift(hobbyForm.hobby);
    return false;
  }

  //posting a single htmlinput field
  // addHobby(hobby) {
  //   this.hobbies.unshift(hobby);
  //   return false;
  // }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
  deleteHobby(hobby)
  {
    for(let i=0;i<this.hobbies.length;i++)
    {
        if (this.hobbies[i]==hobby){
          this.hobbies.splice(i,1);
        }
    }
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post{
  id:number,
  title:string,
  body:string,  
  userId:number

}