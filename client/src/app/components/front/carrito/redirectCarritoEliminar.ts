import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'redirect-carrito-eliminar',
  template:''
})
export class redirectCarritoEliminar implements OnInit {

  constructor(private router:Router){

  }

  ngOnInit(){
    this.router.navigate(['/carrito']);
  }

}