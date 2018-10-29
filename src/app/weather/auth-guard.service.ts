import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { RegisterService } from '../registeration/register.service';
@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private userService:RegisterService){

    }
    canActivate(myRoute:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        return this.userService.userLogStatus;
    }

}