import {Component,OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector:'redirect-carrito',
  template:''
})

export class reditectCarrito implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute){
   
  }

  ngOnInit(){
    this.router.navigate(['']);
  }
}