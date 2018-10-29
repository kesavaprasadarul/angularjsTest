export class UserModel {
  username:string;
    password:string;
    age:number;
    name:string;
    constructor(){}
    createUser(un,pass,name,age){
        this.username=un;
        this.password=pass;
        this.age=age;
        this.name=name;
    }   
}