export class RegisterModel {
  userName:string;
  password:string;
  constructor(){
  
}

create(user,pass){
  console.log(user);
  this.userName=user;
  this.password=pass;
}
}