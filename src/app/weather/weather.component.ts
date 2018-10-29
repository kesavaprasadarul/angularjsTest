import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import{map } from 'rxjs/operators';
import {WeatherService} from './weather.service'
import {WeatherModel} from './weather-model';
@Injectable()

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
   myHttp:Http; name:string;  addcity:WeatherModel[];
   temperature; errorMsg:string;descep:string;
  constructor(private weatherService:WeatherService) { 
    this.errorMsg=""; this.descep=""; this.addcity=[];
    
     }
callGet(city){
 // this.temp=this.myHttp.get("api.openweathermap.org/data/2.5/weather?q
 var model:WeatherModel;
model=new WeatherModel();var i=0; var j=0; var iscity=false;

     this.weatherService.getWeather(city).subscribe(
       (data)=>{
         this.name=data.name;
         this.temperature=data.main.temp;
           this.descep=data.weather[0].description;
         console.log(this.temperature);
        model.create(this.name,this.temperature,this.descep);
        this.addcity.forEach(element=> {
      if(element==city)
      iscity=true;
      if(!iscity){

      this.addcity.push(model);
      }
        }),
    
      
          //this.addcity.push(model);
         
         
       (error)=>{
         this.errorMsg="The database cannot be reached at this moment sorry";
       }
     
    

});
}
 print(){
     
     for(let j=0;j<this.addcity.length;j++){
     console.log(this.addcity[j].city+" "+this.addcity[j].temp+" "+this.addcity[j].desc);
     }
 }


  

  ngOnInit() {
  }

}