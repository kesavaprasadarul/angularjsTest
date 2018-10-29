import { Injectable } from '@angular/core';
import {RegisterModel} from './register-model';
import {UserModel} from '../login/user-model'
@Injectable()
export class RegisterService {
  model:RegisterModel[];users:UserModel[]; userLogStatus:boolean=false;
  constructor() { 
    var log1,log2:RegisterModel;this.users=[];
            var user:UserModel= new UserModel();
    log1=new RegisterModel();
    log2=new RegisterModel();
    log1.create("anupama@gmail.com","qwertyuiop");
    log2.create("asdfgh@gmail.com","asdfghjkl");
    this.model=[log1,log2];

  }
  store(user,pass){
     var add:RegisterModel;
     add=new RegisterModel();
     add.create(user,pass);
     this.model.push(add);
     
   }
   getDetails():RegisterModel[]{
     return this.model;
   
   }

    checkUser(un:string,pass:string){
        var user:UserModel;
        for(let i=0;i<this.users.length;i++){
            if(this.users[i].username==un && this.users[i].password==pass)
            {
                user=this.users[i]; this.userLogStatus=true;
                break;
            }
        }
        return user;
    }

}