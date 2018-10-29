

import { Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
//import { Init } from '../init-weather';
import { Observable } from 'rxjs/Observable';
import {WeatherModel} from './weather-model';

//import { weatherItems } from '../weather/weatherInterface';
//import { WeatherItem } from '../weather/weatherInterface';
//import { WEATHER_ITEMS } from '../init-weather';

import 'rxjs/Rx';

@Injectable()
export class WeatherService {
   private APPID: string;
  private API_URL: string;
  cities:WeatherModel;
 

  constructor(private myHttp:Http) 
  {
    this.APPID='78981f7021ecacf3bc78894dd2e7e5b4';
    this.API_URL='https://api.openweathermap.org/data/2.5/weather?q=';
    
  }
  getWeather(cityName:string):Observable<any>
  {
    
    console.log(cityName);
    return this.myHttp.get(this.API_URL + cityName + '&APPID=' + this.APPID + '&units=metric')
      .map(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
        return Observable.throw(error.json());
      });
      //console.log(cityName);


  }
  getCity(){
    
  }

  addCity(){

  }

  

}