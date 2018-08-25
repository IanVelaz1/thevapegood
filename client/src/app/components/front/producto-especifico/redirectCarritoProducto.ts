import {Component,OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector:'redirectCarritoProducto',
  template:''
})

export class redirectCarritoProducto implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute){

  }

  idProducto:string="";
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.idProducto=params.id;
      this.router.navigate(['/colecciones/producto/'+this.idProducto]);
    });
  }

}