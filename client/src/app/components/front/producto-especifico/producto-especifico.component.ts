import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../services/productos/producto.service';
import { Producto } from '../../../interfaces/producto';
import { ColeccionesService } from '../../../services/colecciones/colecciones.service';
import { CarritoService } from '../../../services/carrito/carrito.service';
@Component({
  selector: 'app-producto-especifico',
  templateUrl: './producto-especifico.component.html',
  styleUrls: ['./producto-especifico.component.css']
})
export class ProductoEspecificoComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private httpProducto:ProductoService,private httpColeccion:ColeccionesService,private httpCarrito:CarritoService) { }

  idProducto;
  ngOnInit() {
   this.route.params.subscribe(params=>{
     this.idProducto=params.idProducto;
     this.recuperarProducto();
   });
  }

  objProducto;
  objetoProducto:Producto={
    codigoProd:"",
    nombreProd:"",
    descripcionProd:"",
    imagenesProd:[],
    addedCart:false,
    comentariosProd:[],
    skuProd:"",
    invProd:false,
    existenciasProd:0,
    pesoProd:0,
    unidadPesoProd:"",
    permitirCompraSinInv:false,
    compararPrecioProd:0,
    precioVentaProd:0,
    proveedoresProd:[{nombreProd:""}],
    cantidadCarrito:0,
    tagsProd:[],
    coleccionesProd:[],
    tienePromocionesProd:false,
    promocionProd:"",
    cobrarImpuestosProd:false,
    requiereEnvio:false
  }
  
  imagenProd:string="";
  descripcionCorta:string="";

  rate:number=4;

  recuperarProducto(){
   this.httpProducto.recuperarProductoEspecifico(this.idProducto).subscribe(producto=>{
     this.objProducto=producto;
     this.objetoProducto=this.objProducto.producto;
     this.imagenProd=this.objetoProducto.imagenesProd[0].secure_url;
     this.recuperarProductosCarrito();
   });
  }

  verImagen(url){
    this.imagenProd=url;
  }

  objCarrito;
  arrayCarrito:Producto[]=[];
  recuperarProductosCarrito(){
   
   if(this.httpCarrito.carritoExiste()){
    this.objCarrito=JSON.parse(this.httpCarrito.recuperarProductosCarrito());
    this.arrayCarrito=this.objCarrito.carrito;
    this.verificarProductosCarrito(this.arrayCarrito);
   }
  }

  verificarProductosCarrito(array:Producto[]){ 
    for(let i=0;i<array.length;i++){
      if(this.idProducto==array[i]._id){
        this.objetoProducto.addedCart=true;
      }
    }
  }

  agregarCarrito(){
    let objetoCarrito={
      carrito:[]
    }
    let stringCarrito:string="";
    if(this.httpCarrito.carritoExiste()==false){
      this.arrayCarrito.push(this.objetoProducto);
      objetoCarrito={
        carrito:this.arrayCarrito
      }
      stringCarrito=JSON.stringify(objetoCarrito);
      this.httpCarrito.agregarCarrito(stringCarrito);
      this.router.navigate(['/redirect/carrito/producto/'+this.idProducto]);
    }else{
      this.arrayCarrito.push(this.objetoProducto);
      objetoCarrito={
        carrito:this.arrayCarrito
      }
      stringCarrito=JSON.stringify(objetoCarrito);
      console.log('====================================');
      console.log(this.arrayCarrito);
      console.log('====================================');
      this.httpCarrito.eliminarProductosCarrito();
      this.httpCarrito.agregarCarrito(stringCarrito);
    }
    

  }




}
