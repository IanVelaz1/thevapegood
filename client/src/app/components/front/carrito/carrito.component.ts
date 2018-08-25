import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../../../services/carrito/carrito.service';
import { ProductoService } from '../../../services/productos/producto.service';
import { Producto } from '../../../interfaces/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private httpCarrito:CarritoService,private httpProducto:ProductoService,private router:Router) { }

  ngOnInit() {
    this.recuperarCarrito();
  }

  objCarrito;
  arrayProductosCarrito:Producto[]=[];
  recuperarCarrito(){
    if(this.httpCarrito.carritoExiste()){
      this.objCarrito=JSON.parse(this.httpCarrito.recuperarProductosCarrito());
      for(let i=0;i<this.objCarrito.carrito.length;i++){
      
          
         this.arrayProductosCarrito.push(this.objCarrito.carrito[i]);
         if(i==this.objCarrito.carrito.length-1){
          this.sumaTotal();
         }
        
       
      }
    }
  }

  total:number=0;
  multiTotal:number;
  sumTotal:number;
  sumaTotal(){
   this.total=0;
    for(let i=0;i<this.arrayProductosCarrito.length;i++){
      this.multiTotal=this.arrayProductosCarrito[i].precioVentaProd*this.arrayProductosCarrito[i].cantidadCarrito;
      this.total=this.total+this.multiTotal;
      }
  }

  eliminarDeCarrito(id){
    let objetoCarrito={
      carrito:[]
    }
    let stringCarrito:string="";
    this.httpCarrito.eliminarProductosCarrito();
    for(let i=0;i<this.arrayProductosCarrito.length;i++){
      if(this.arrayProductosCarrito[i]._id==id){
        this.arrayProductosCarrito.splice(i,1);
        objetoCarrito={
          carrito:this.arrayProductosCarrito
        };
        stringCarrito=JSON.stringify(objetoCarrito);
        this.httpCarrito.agregarCarrito(stringCarrito);
        this.router.navigate(['/redirect/carrito/eliminar']);
      }
    }
  }

}
