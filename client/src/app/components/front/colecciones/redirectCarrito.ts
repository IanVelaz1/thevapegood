import {Component,OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector:"redirect-carrito-col",
  template:""
})
export class redirectCarritoCol implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute){
   
  }

  idColeccion:string="";
  ngOnInit(){
    this.route.params.subscribe(params=>{
   this.idColeccion=params.id;
   this.router.navigate(['/colecciones/'+this.idColeccion]);
    });

  }

}