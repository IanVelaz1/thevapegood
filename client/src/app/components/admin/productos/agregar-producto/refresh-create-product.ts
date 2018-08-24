import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-refresh-crear-producto',
  template:""
})
export class RefreshCreateProduct implements OnInit{

  constructor(private router:Router){
    this.router.navigate(["/admin/productos/agregar"]);
  }

  ngOnInit(){
   
  }

}
