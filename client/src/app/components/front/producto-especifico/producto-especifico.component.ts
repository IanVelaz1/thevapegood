import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../services/productos/producto.service';
import { Producto } from '../../../interfaces/producto';
import { ColeccionesService } from '../../../services/colecciones/colecciones.service';
@Component({
  selector: 'app-producto-especifico',
  templateUrl: './producto-especifico.component.html',
  styleUrls: ['./producto-especifico.component.css']
})
export class ProductoEspecificoComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private httpProducto:ProductoService,private httpColeccion:ColeccionesService) { }

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
     console.log('====================================');
     console.log(this.objetoProducto);
     console.log('====================================');
   });
  }

  verImagen(url){
    this.imagenProd=url;
  }




}
