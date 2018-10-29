import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {RegisterService} from '../registeration/register.service';
import {UserModel} from './user-model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myLoginForm:FormGroup;
   message:string;
  constructor(private registerService:RegisterService) { 
    this.myLoginForm=new FormGroup(
      {username : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
      password : new FormControl('',Validators.required)})
    
  }

  get username(){
    return this.myLoginForm.get('username');
  }
  get password(){
    return this.myLoginForm.get('password');
  }

  Login(myForm){
    var user:UserModel;
    //console.log(user.username);
    if(myForm.valid)
   
   { 
     user=this.registerService.checkUser(this.username.value,this.password.value)
  
     if(user){
    this.message="Welcome" ;
  }
   }
  }
  ngOnInit() {
  }

}