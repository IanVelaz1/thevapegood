 import {Injectable} from '@angular/core';
import {Router, CanActivate} from "@angular/router";
import {AdminLoginService} from '../services/admin-login.service';
@Injectable()
export class guardAdmin implements CanActivate{

  constructor(private http:AdminLoginService, private router:Router){

  }

  canActivate(){
   if(this.http.loggedIn()){
     return true; 
   }else{
     this.router.navigate(['/admin/login']);
     return false;
   }
  }



}