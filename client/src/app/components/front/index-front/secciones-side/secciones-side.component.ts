import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import {NguCarousel} from '@ngu/carousel';
import {ColeccionesService} from '../../../../services/colecciones/colecciones.service';
import { Coleccion } from '../../../../interfaces/colecciones';
import {ProductoService} from '../../../../services/productos/producto.service';
import { Producto } from '../../../../interfaces/producto';
import { BsModalRef, BsModalService } from '../../../../../../node_modules/ngx-bootstrap';
import { CarritoService } from '../../../../services/carrito/carrito.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-secciones-side',
  templateUrl: './secciones-side.component.html',
  styleUrls: ['./secciones-side.component.css']
})
export class SeccionesSideComponent implements OnInit {

  modalRef:BsModalRef;

  constructor(private serviceColecciones:ColeccionesService,private serviceProductos:ProductoService,private modalService:BsModalService,private httpCarrito:CarritoService,private router:Router) { }

  public carouselComments:NguCarousel;

  @Input() imagenesIzquierda:any[]; 
  @Input() objetoWidgetIzquierda1:any; 
  @Input() arrayObjetosWidget2:any[];
  @Input() coleccionesSeccionesProd:any;
  @Input() imagenesWidgetDerecha:any;

  carouselOne;
  imagenesWidgetDer={
    imagen1:{
      url:"",
      link:""
    },
    imagen2:{
      url:"",
      link:""
    },
    imagen3:{
      url:"",
      link:""
    }
  }

  ngOnInit() {
    this.carouselComments={
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }

    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
    }

   if(this.imagenesIzquierda.length==0 || !this.objetoWidgetIzquierda1.idColeccion || this.arrayObjetosWidget2.length==0){
     let interval=setInterval(()=>{
        if(this.imagenesIzquierda.length>0 || this.objetoWidgetIzquierda1.idColeccion || this.arrayObjetosWidget2.length>0){
       this.recuperarColeccion(this.objetoWidgetIzquierda1.idColeccion);
      this.recuperarColeccionDerecha1(this.coleccionesSeccionesProd.idColeccion1);
      this.recuperarColeccionDerecha2(this.coleccionesSeccionesProd.idColeccion2);
      this.imagenesWidgetDer=this.imagenesWidgetDerecha;
      clearInterval(interval)
        }
     },400);
   }

  }

  objColecciones;
  objetoColeccion:Coleccion={
    descripcionCol:"",
    imagenCol:{},
    nombreCol:"",
    productosCol:[]
  };  
  recuperarColeccion(id){
    this.serviceColecciones.recuperarColeccionEspecifica(id).subscribe(coleccion=>{
      this.objColecciones=coleccion;
      this.objetoColeccion=this.objColecciones.coleccion;
     
     for(let i=0;i<this.objetoColeccion.productosCol.length;i++){

       this.recuperarProductosWidget2(this.objetoColeccion.productosCol[i]);
     }
       
    })
  }

  objProductos;
  arrayProductos1:Producto[]=[];
  recuperarProductosWidget2(id){
    this.serviceProductos.recuperarProductoEspecifico(id).subscribe(productos=>{
      this.objProductos=productos;
      this.arrayProductos1.push(this.objProductos.producto);

    });
  }

  
  objColRecuperada1;
  objColeccion1:Coleccion={
    _id:"",
    descripcionCol:"",
    imagenCol:{},
    nombreCol:"",
    productosCol:[]
  }
  recuperarColeccionDerecha1(id){
    let idColeccion1=id;
    if(idColeccion1.length>0){
      this.serviceColecciones.recuperarColeccionEspecifica(id).subscribe(coleccion=>{
        this.objColRecuperada1=coleccion;
        this.objColeccion1=this.objColRecuperada1.coleccion;
         this.recuperarProductosColeccion1(this.objColeccion1.productosCol);
      });
    }
  }

  objProducto1;
  arrayProductos11:Producto[]=[];
  recuperarProductosColeccion1(array){
     for(let i=0;i<array.length;i++){
       this.serviceProductos.recuperarProductoEspecifico(array[i]).subscribe(producto=>{
         this.objProducto1=producto;
         this.arrayProductos11.push(this.objProducto1.producto);
         this.verificarProductos1();
       });
     }
  }

  objColRecuperada2;
  objColeccion2:Coleccion={
    _id:"",
    descripcionCol:"",
    imagenCol:{},
    nombreCol:"",
    productosCol:[]
  };
  recuperarColeccionDerecha2(id){
    this.serviceColecciones.recuperarColeccionEspecifica(id).subscribe(coleccion=>{
      this.objColRecuperada2=coleccion;
      this.objColeccion2=this.objColRecuperada2.coleccion;
      this.recuperarProductosColeccion2(this.objColeccion2.productosCol);
    });
  }

  objProducto2;
  arrayProductos12:Producto[]=[];
  recuperarProductosColeccion2(array){
    for(let i=0;i<array.length;i++){
      this.serviceProductos.recuperarProductoEspecifico(array[i]).subscribe(producto=>{
        this.objProducto2=producto;
        this.arrayProductos12.push(this.objProducto2.producto);
        this.verificarProductos2();
      });
      
    }
 }

  objetoProducto:Producto={
    _id:"",
    addedCart:false,
    cantidadCarrito:0,
    cobrarImpuestosProd:false,
    codigoProd:"",
    coleccionesProd:[],
    comentariosProd:[],
    compararPrecioProd:0,
    descripcionProd:"",
    existenciasProd:0,
    imagenesProd:[],
    invProd:false,
    nombreProd:"",
    permitirCompraSinInv:false,
    pesoProd:0,
    precioVentaProd:0,
    promocionProd:"",
    proveedoresProd:[],
    requiereEnvio:false,
    skuProd:"",
    tagsProd:[],
    tienePromocionesProd:false,
    tipoProducto:"",
    unidadPesoProd:""
  }

 abrirModal(producto){
  this.objetoProducto=producto;
 }
  

 arrayCarrito:String[]=[];
 objCarrito;
 agregarCarrito(producto){
  let objetoCarrito={
    carrito:[]
  }
  let stringCarrito=""
  let objetoProducto:any={
    _id:producto._id,
    nombreProd:producto.nombreProd,
    descripcionProd:producto.descripcionProd,
    imagenesProd:producto.imagenesProd,
    addedCart:producto.addedCart,
    permitirCompraSinInv:producto.permitirCompraSinInv,
    compararPrecioProd:producto.compararPrecioProd,
    precioVentaProd:producto.precioVentaProd,
    cantidadCarrito:producto.cantidadCarrito,
    promocionProd:producto.promocionProd,
    requiereEnvio:producto.requiereEnvio,
    cobrarImpuestosProd:producto.cobrarImpuestosProd
  }
   
   if(this.httpCarrito.carritoExiste()==false){
     this.arrayCarrito.push(objetoProducto);
     objetoCarrito={
       carrito:this.arrayCarrito
     }
     stringCarrito=JSON.stringify(objetoCarrito);
     this.httpCarrito.agregarCarrito(stringCarrito)
     this.router.navigateByUrl('/redirect/carrito',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/']);
     });
     
   }else{
     objetoCarrito=JSON.parse(this.httpCarrito.recuperarProductosCarrito());
     objetoCarrito.carrito.push(objetoProducto);
     stringCarrito=JSON.stringify(objetoCarrito);
     this.httpCarrito.agregarCarrito(stringCarrito);
     this.router.navigateByUrl('/redirect/carrito',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/']);
     });
   }
    console.log('====================================');
    console.log(objetoCarrito);
    console.log('===================================='); 
   
 }

 verificarProductos1(){
  let objetoCarrito=JSON.parse(this.httpCarrito.recuperarProductosCarrito());
  for(let i=0;i<objetoCarrito.carrito.length;i++){
    for(let a=0;a<this.arrayProductos11.length;a++){
      if(objetoCarrito.carrito[i]._id==this.arrayProductos11[a]._id){
        this.arrayProductos11[a].addedCart=true;
      }
    }
  }
  


}

verificarProductos2(){
  let objetoCarrito=JSON.parse(this.httpCarrito.recuperarProductosCarrito());
  for(let i=0;i<objetoCarrito.carrito.length;i++){
    for(let a=0;a<this.arrayProductos12.length;a++){
      if(objetoCarrito.carrito[i]._id==this.arrayProductos12[a]._id){
        this.arrayProductos12[a].addedCart=true;
      }
    }
  }
}

 verProducto(id){
  this.router.navigate(['/producto/'+id]);
 }




  max: number = 5;
  rate: number = 4;
  isReadonly: boolean = true;
  imagenes:string[]=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCUxhU3X4ew0ZfH1MiRHdSZcFeOmo2PqgOjJvPQSbGCEx0bnJ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMcHao2HZZZSNnxBYDJ7cbjEF-LqcNUjS8Pz9zTeMHExohcbB","https://images-na.ssl-images-amazon.com/images/I/81Uvtgw9D9L._SL1500_.jpg"];

}
