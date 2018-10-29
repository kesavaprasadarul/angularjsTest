import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import{ RouterModule,Route} from '@angular/router';
//import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { RegisterService } from './registeration/register.service';
import { AuthGuardService} from './weather/auth-guard.service';
import{Router} from'@angular/router';

var myAppRoutes:Route[]=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterationComponent},
  {path:'weather',component:WeatherComponent, canActivate:[AuthGuardService]
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpModule,RouterModule],
  declarations: [ AppComponent, HelloComponent, WeatherComponent, LoginComponent, RegisterationComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WeatherService, RegisterService, AuthGuardService]
})
export class AppModule { }
