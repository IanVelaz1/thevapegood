import { Component, OnInit } from '@angular/core';
import {AdminLoginService} from '../../../services/admin-login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private httpAdmin:AdminLoginService,private router:Router) { }

  ngOnInit() {
    
  }

  navegar(url){
   this.router.navigate([url]);
  }

}
