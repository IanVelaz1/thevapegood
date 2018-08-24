import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../../services/productos/producto.service';
import {Producto} from '../../../../interfaces/producto';
import {Promocion} from '../../../../interfaces/promociones';
import {PromocionService} from '../../../../services/promociones/promocion.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-crear-descuento',
  templateUrl: './crear-descuento.component.html',
  styleUrls: ['./crear-descuento.component.css']
})
export class CrearDescuentoComponent implements OnInit {

  constructor(private httpProducto:ProductoService, private httpPromocion:PromocionService, private router:Router) { }

  ngOnInit() {
    this.recuperarProductos();
  }

  objetoPromocion:Promocion={
    nombreProm:"",
    descripcionProm:"",
    productosProm:[],
    precioProm:0,
    usosLimiteProm:0,
    fechasProm:[]
  }

nombreIgual:boolean=false;

objProductos;
arrProductos:Producto[]=[];
recuperarProductos(){
  this.httpProducto.recuperarProductos().subscribe(productos=>{
    this.objProductos=productos;
    this.arrProductos=this.objProductos.productos;
    console.log('====================================');
    console.log(productos);
    console.log('====================================');
  });
}



listaProductosVisible=false;
arrayProductosBusqueda=[]
arrayProductosSeleccionadas:any[]=[];
nombreProducto="";
buscarProductos(){
  this.arrayProductosBusqueda=[];
  this.listaProductosVisible=true;
  if(this.nombreProducto.length==0){
    this.listaProductosVisible=false;
  }
  
   for(let i=0;i<this.arrProductos.length;i++){
     if(this.arrProductos[i].nombreProd.search(this.nombreProducto)==0){
        var index=this.arrProductos.indexOf(this.arrProductos[i]);
 
        this.arrayProductosBusqueda.push(this.arrProductos[index]);
   
     }else if(this.arrProductos[i].nombreProd.search(this.nombreProducto)!=0){
     }
     
   }

}

agregarArrayProd(producto){
  this.listaProductosVisible=false;
  if(this.arrayProductosSeleccionadas.length==0){
    this.arrayProductosSeleccionadas.unshift(producto);
  }else{
    for(let i=0;i<this.arrayProductosSeleccionadas.length;i++){
      if(this.arrayProductosSeleccionadas[i]._id != producto._id){
        this.arrayProductosSeleccionadas.unshift(producto);
      }
    }
  }
 
  this.nombreProducto="";
}

objPromociones;
arrayPromocionesRecuperadas:Promocion[]=[];
guardarPromocion(){

  this.httpPromocion.recuperarPromociones().subscribe(promociones=>{
    this.objPromociones=promociones;
    this.arrayPromocionesRecuperadas=this.objPromociones.promociones;
    if(this.arrayPromocionesRecuperadas.length==0){
      this.httpPromocion.guardarPromocion(this.objetoPromocion).subscribe(promocion=>{
        this.router.navigate(['/admin/descuentos']);
       });
    }else if(this.arrayPromocionesRecuperadas.length>0){
      for(let i=0;i<this.arrayPromocionesRecuperadas.length;i++){
        if(this.arrayPromocionesRecuperadas[i].nombreProm!=this.objetoPromocion.nombreProm){
          this.httpPromocion.guardarPromocion(this.objetoPromocion).subscribe(promocion=>{
            this.router.navigate(['/admin/descuentos']);
           });
        }else{
          this.nombreIgual=true;
        }
      }
    }
  });

 
  
}


}
