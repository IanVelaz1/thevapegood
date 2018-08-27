import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ColeccionesService } from '../../../services/colecciones/colecciones.service';
import { ProductoService } from '../../../services/productos/producto.service';
import { Coleccion } from '../../../interfaces/colecciones';
import { Producto } from '../../../interfaces/producto';
import { Proveedor } from '../../../interfaces/proveedores';
import { ProveedorService } from '../../../services/proveedores/proveedor.service';
import { Tags } from '../../../interfaces/tags';
import { TagService } from '../../../services/tags/tag.service';
import { Tipos } from '../../../interfaces/tipos';
import { TipoService } from '../../../services/tipo/tipo.service';
import {CarritoService} from '../../../services/carrito/carrito.service';
@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private httpColeccion:ColeccionesService,private httpProductos:ProductoService,private httpProveedores:ProveedorService,private httpTags:TagService,private httpTipo:TipoService,private ref:ChangeDetectorRef,private router:Router,private httpCarrito:CarritoService) { }

  idColeccion:string="";
  carouselOne;
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.idColeccion=params.id;
      this.recuperarColeccion();
    });
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

    setInterval(()=>{
      this.ref.markForCheck();
    },500);
    
   

  }

  objColeccionRecuperada;
  coleccionRecuperada:Coleccion={
    _id:"",
    descripcionCol:"",
    imagenCol:{
     secure_url:""

    },
    nombreCol:"",
    productosCol:[]
  };

  

  recuperarColeccion(){
    this.httpColeccion.recuperarColeccionEspecifica(this.idColeccion).subscribe(coleccion=>{
      this.objColeccionRecuperada=coleccion;
      this.coleccionRecuperada=this.objColeccionRecuperada.coleccion;
       this.recuperarProductos(this.coleccionRecuperada.productosCol);
    });
  }

  objProducto;
  arrayProductos:Producto[]=[];
  arrayProductosFiltro:Producto[]=[];
  recuperarProductos(productos:any[]){
    let arrayProd:any[]=productos;
    for(let i=0;i<productos.length;i++){
      this.httpProductos.recuperarProductoEspecifico(productos[i]).subscribe(productos=>{
        this.objProducto=productos;
        this.arrayProductos.push(this.objProducto.producto);
        this.arrayProductosFiltro.push(this.objProducto.producto); 
        this.ordernarPrecios();
    
        if(i+1==arrayProd.length){
          arrayProd=this.arrayProductos;
          this.separarMarcas(arrayProd);
          this.recuperarTags();
           this.verificarProductos();
      }
      }); 
    }
    
  }

  recuperarSoloProductos(){
    this.arrayProductos=[];
    for(let i=0;i<this.coleccionRecuperada.productosCol.length;i++){
      this.httpProductos.recuperarProductoEspecifico(this.coleccionRecuperada.productosCol[i]).subscribe(productos=>{
        this.objProducto=productos;
        this.arrayProductos.push(this.objProducto.producto);
       
      }); 
    }
  }

  separarMarcas(array:Producto[]){
    let arrayTags:Tags[]=[];
    for(let i=0;i<array.length;i++){
      for(let a=0;a<array[i].proveedoresProd.length;a++){
        this.ordenarProveedores(array[i].proveedoresProd[a]);
      }
      this.ordenarTipos(array[i].tipoProducto);
    }
  }


  ///////ordenamiento proveedores///////

  arrayProveedoresId:string[]=[];
  ordenarProveedores(proveedor:Proveedor){   
    if(this.arrayProveedoresId.length==0){
      this.arrayProveedoresId.push(proveedor._id);
    }else{
      for(let i=0;i<this.arrayProveedoresId.length;i++){
        if(proveedor._id!=this.arrayProveedoresId[i]){
          this.arrayProveedoresId.push(proveedor._id);
        }
      }
    }
   this.recuperarProveedores();
  }

  objProveedores;
  arrayProveedores:Proveedor[]=[];
  recuperarProveedores(){
    for(let i=0;i<this.arrayProveedoresId.length;i++){
      this.httpProveedores.recuperarProveedorEspecifico(this.arrayProveedoresId[i]).subscribe(proveedor=>{
        this.objProveedores=proveedor;
       if(this.arrayProveedores.length==0){
          this.arrayProveedores.push(this.objProveedores.proveedor);
       }else{
         for(let a=0;a<this.arrayProveedores.length;a++){
           if(this.arrayProveedores[a]._id!=this.objProveedores.proveedor._id){
             this.arrayProveedores.push(this.objProveedores.proveedor);
           
           }
         }
       }
    });
    }
  }

  todosLosProductos(){
    this.arrayProductos=this.arrayProductosFiltro;
  }

  filtered:boolean=false;
  filtrarProveedores(id){
   this.arrayProductos=[];
    for(let i=0;i<this.arrayProductosFiltro.length;i++){
      if(this.arrayProductosFiltro[i].proveedoresProd[0]._id==id){
        this.arrayProductos.push(this.arrayProductosFiltro[i]);
      }
    }
    
  }

  ///////ordenamiento proveedores///////

///////ordenamiento tags///////
   arrayTags:Tags[]=[];
   objTags;
   recuperarTags(){
    this.httpTags.recuperarTags().subscribe(tags=>{
     this.objTags=tags;
     this.arrayTags=this.objTags.tags;
    });
   }

   filtrarTag(id){
     this.arrayProductos=[];
     for(let i=0;i<this.arrayProductosFiltro.length;i++){
       for(let a=0;a<this.arrayProductosFiltro[i].tagsProd.length;a++){
         if(this.arrayProductosFiltro[i].tagsProd[a]._id==id){
           this.arrayProductos.push(this.arrayProductosFiltro[i]);
         }
       }
     }
   }
///////ordenamiento tags///////

///ordenamiento tipo//////////
  arrayTiposId:any[]=[];
  ordenarTipos(tipo:Tipos){
    if(this.arrayTiposId.length==0){
      this.arrayTiposId.push(tipo);
     
    }else{
      for(let i=0;i<this.arrayTiposId.length;i++){
        if(tipo!=this.arrayTiposId[i]){
          this.arrayTiposId.push(tipo);
         
        }
      }
    }
    this.recuperarTipos();
  }

  objTipos;
  arrayTipos:Tipos[]=[];
  recuperarTipos(){
    for(let i=0;i<this.arrayTiposId.length;i++){
      this.httpTipo.recuperarTipoEspecifico(this.arrayTiposId[i]).subscribe(tipos=>{
        this.objTipos=tipos;
        if(this.arrayTipos.length==0){
          this.arrayTipos.push(this.objTipos.tipo);
       
        }else{
          for(let a=0;a<this.arrayTipos.length;a++){
            if(this.arrayTipos[a]._id!=this.objTipos.tipo._id){
              this.arrayTipos.push(this.objTipos.tipo);
              
            }
          }
        }
      });
    }
  }

  filtrarTipo(id){
    this.arrayProductos=[];
    for(let i=0;i<this.arrayProductosFiltro.length;i++){
      if(this.arrayProductosFiltro[i].tipoProducto==id){
        this.arrayProductos.push(this.arrayProductosFiltro[i]);
      }
    }
  }

///ordenamiento tipo////////// 


////filtro precio////////
  precioMaximo:number=0;
  ordernarPrecios(){
    for(let i=0;i<this.arrayProductosFiltro.length;i++){
      if(i>0){
        if(this.arrayProductosFiltro[i].precioVentaProd>this.arrayProductosFiltro[i-1].precioVentaProd){
            this.precioMaximo=this.arrayProductosFiltro[i].precioVentaProd;
        }
      }else{
        this.precioMaximo=this.arrayProductosFiltro[0].precioVentaProd;  
       }
    
    }
  }
filtroPrecio:number=0;
  aplicarFiltroPrecio(){
    this.arrayProductos=[];
    for(let i=0;i<this.arrayProductosFiltro.length;i++){
      if(this.arrayProductosFiltro[i].precioVentaProd<=this.filtroPrecio){
        this.arrayProductos.push(this.arrayProductosFiltro[i]);
      }
    }
  }
////filtro precio///////

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

 verProducto(id){
   this.router.navigate(['/producto/'+id]);
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
     this.httpCarrito.agregarCarrito(stringCarrito);
     this.router.navigate(['/redirect/coleccion/'+this.idColeccion]);
     this.router.navigateByUrl('/redirect/carrito',{skipLocationChange:true}).then(()=>{
       this.router.navigate(['/colecciones/'+this.idColeccion]);
     });
   }else{
     objetoCarrito=JSON.parse(this.httpCarrito.recuperarProductosCarrito());
     objetoCarrito.carrito.push(objetoProducto);
     stringCarrito=JSON.stringify(objetoCarrito);
     this.httpCarrito.agregarCarrito(stringCarrito);
     this.router.navigateByUrl('/redirect/carrito',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/colecciones/'+this.idColeccion]);
    });
   }
    console.log('====================================');
    console.log(objetoCarrito);
    console.log('===================================='); 
   
 }

 verificarProductos(){
     let objetoCarrito=JSON.parse(this.httpCarrito.recuperarProductosCarrito());
     console.log('====================================');
     console.log(objetoCarrito);
     console.log('====================================');
     for(let i=0;i<objetoCarrito.carrito.length;i++){
       for(let a=0;a<this.arrayProductos.length;a++){
         if(objetoCarrito.carrito[i]._id==this.arrayProductos[a]._id){
           this.arrayProductos[a].addedCart=true;
         }
       }
     }
   
 }

 verCarrito(){
   this.router.navigate(['/carrito']);
 }

}
