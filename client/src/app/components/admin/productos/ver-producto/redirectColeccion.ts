import {Component,OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector:"redirectColecciones",
  template:''
})

export class redirectProducto implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute){
    
  }

  idProducto:string="";
  ngOnInit(){
    this.route.params.subscribe(params=>{
     this.idProducto=params.id;
      this.router.navigate(['/admin/productos/'+this.idProducto]);
    });
  }


}