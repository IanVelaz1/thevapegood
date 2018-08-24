import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../../../services/carrito/carrito.service';
import { ProductoService } from '../../../services/productos/producto.service';
import { Producto } from '../../../interfaces/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private httpCarrito:CarritoService,private httpProducto:ProductoService) { }

  ngOnInit() {
    this.recuperarCarrito();
  }

  objCarrito;
  arrayProductosCarrito:Producto[]=[];
  objProducto;
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

}
