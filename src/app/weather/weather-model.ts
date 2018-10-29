export class WeatherModel {
  city:string;
  temp:number;
  desc:string;

  create(city,tem,des)
  {
    this.city=city;
    this.temp=tem;
    this.desc=des;
  }
}