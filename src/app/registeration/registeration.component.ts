import { Component, OnInit } from '@angular/core';
import{UserModel} from'../login/user-model';
import {RegisterService} from './register.service'
import {RegisterModel} from './register-model'
import{Router} from'@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
model:RegisterModel[];
  constructor(private registerService:RegisterService, private router:Router) {
    var log1,log2:RegisterModel;
    log1=new RegisterModel();
    log2=new RegisterModel();
    log1.create("anupama@gmail.com","qwertyuiop");
    log2.create("asdfgh@gmail.com","asdfghjkl");
    this.model=[log1,log2];
  }
  Show(un,pass,name,age){ 
  console.log(un);
  //console.log(this.gender);
 // this.userService.registerUser();
 var add:UserModel;
   add=new UserModel();
   add.createUser(un,pass,name,age);
   this.registerService.store(un,pass);
  //this.userService.store(un,pass,name,age);
  this.router.navigateByUrl("login");
}

  ngOnInit() {
  }

}