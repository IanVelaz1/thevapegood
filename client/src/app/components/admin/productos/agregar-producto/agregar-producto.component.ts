import { Component, OnInit } from '@angular/core';
import {SubirFotosService} from '../../../../services/uploadPhotos/subir-fotos.service';
import {DomSanitizer} from '@angular/platform-browser';
import {UploadEvent,UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import { HttpHeaders } from '@angular/common/http';
import {CrearProductoRefreshService} from '../../../../services/refresh-crear-prod/crear-producto-refresh.service';
import {Router} from '@angular/router';
import {ChangeDetectorRef} from '@angular/core';

import {Producto,Proveedor,Tipos,Tags,Coleccion} from '../../../../interfaces/exportInterfaces';

/////////////////////services
import {ColeccionesService} from '../../../../services/colecciones/colecciones.service';
import {ProveedorService} from '../../../../services/proveedores/proveedor.service';
import {TipoService} from '../../../../services/tipo/tipo.service';
import {TagService} from '../../../../services/tags/tag.service';
import {ProductoService} from '../../../../services/productos/producto.service';
/////////////////////services



@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

objetoProducto:Producto={
 nombreProd:"",
 addedCart:false,
 cantidadCarrito:0,
 codigoProd:"",
 coleccionesProd:[],
 comentariosProd:[],
 descripcionProd:"",
 existenciasProd:0,
 imagenesProd:[],
 invProd:false,
 permitirCompraSinInv:false,
 pesoProd:0,
 precioVentaProd:0,
 promocionProd:"",
 proveedoresProd:[],
 skuProd:"",
 tienePromocionesProd:false,
 tagsProd:[],
 unidadPesoProd:"",
 compararPrecioProd:0,
 tipoProducto:"",
 cobrarImpuestosProd:false,
 requiereEnvio:false
}



  constructor(private imagenService:SubirFotosService,
    private sanitizer:DomSanitizer,
    private refreshService:CrearProductoRefreshService,
    private router:Router,
    private ref:ChangeDetectorRef,
    private httpColecciones:ColeccionesService,
    private httpProveedores:ProveedorService,
    private httpTipo:TipoService,
    private httpTags:TagService,
    private httpProducto:ProductoService
    ){
    setInterval(()=>{
         this.ref.markForCheck();
    },500);

   }

  ngOnInit() {
    this.recuperarColecciones();
    this.recuperarProveedores();
    this.recuperarTags();
    this.recuperarTipos();
  }

  public archivos:UploadFile[]=[];

  arrayImagenesProducto:any[]=[];
  objetoImagenSubida;

  public dropped(event:UploadEvent){
   
    this.archivos=event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
        //console.log(droppedFile.relativePath, file);
 
          console.log('====================================');
          console.log(droppedFile);
          console.log('====================================');
          // You could upload it like this:
          const formData = new FormData()
          formData.append('file', file, droppedFile.relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
              
    
            
          this.imagenService.subirFoto(formData).subscribe(img=>{
            this.objetoImagenSubida=img;
            if(this.objetoImagenSubida.success==true){
              this.arrayImagenesProducto.unshift(this.objetoImagenSubida.result)           
            }
            
            
          });
 /*
          this..post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/
 
        });
      }else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
  }

}


subirImagenes(data){
  
   for(let i=0;i<data.target.files.length;i++){
      const formData=new FormData();
      formData.append('file',data.target.files[i]);
      this.imagenService.subirFoto(formData).subscribe(img=>{
        this.objetoImagenSubida=img;
        if(this.objetoImagenSubida.success==true){
          this.arrayImagenesProducto.unshift(this.objetoImagenSubida.result)             
        }
        
        
      });
   }
}

public fileOver(event){

}

public fileLeave(event){

}

eliminarImagen(id){
  for(let i=0;i<this.arrayImagenesProducto.length;i++){
    if(this.arrayImagenesProducto[i].public_id==id){
      this.arrayImagenesProducto.splice(i,1);
      }
  }
  this.imagenService.eliminarImagen(id).subscribe(imagen=>{
    
  })
}

tiposRecuperados;
arrayTipos:Tipos[]=[];
recuperarTipos(){
this.httpTipo.recuperarTipos().subscribe(tipos=>{
  this.tiposRecuperados=tipos;
  this.arrayTipos=this.tiposRecuperados.tipos;
  console.log('====================================');
  console.log(tipos);
  console.log('====================================');
});
}

proveedoresRecuperados;
arrayProveedores:Proveedor[]=[];
recuperarProveedores(){
this.httpProveedores.recuperarProveedores().subscribe(proveedor=>{
  this.proveedoresRecuperados=proveedor;
  this.arrayProveedores=this.proveedoresRecuperados.proveedores;
  console.log('====================================');
  console.log(proveedor);
  console.log('====================================');
});
}

coleccionesRecuperadas;
arrayColecciones:Coleccion[]=[];
recuperarColecciones(){
this.httpColecciones.recuperarColecciones().subscribe(colecciones=>{
  this.coleccionesRecuperadas=colecciones;
  this.arrayColecciones=this.coleccionesRecuperadas.colecciones;
 console.log('====================================');
 console.log(colecciones);
 console.log('====================================');
});
}

tagsRecuperadas;
objetosTags=[];
recuperarTags(){
this.httpTags.recuperarTags().subscribe(tags=>{
  this.tagsRecuperadas=tags;
  this.objetosTags=this.tagsRecuperadas.tags;
console.log('====================================');
console.log(tags);
console.log('====================================');
});
}




objetoTipo:Tipos={
  productos:[],
  tipo:""
}

objGuardarTipo;
guardarTipo(event){
  this.objetoTipo.tipo=this.nombreTipo;
  if(event.keyCode==13){
    this.httpTipo.guardarTipo(this.objetoTipo).subscribe(tipo=>{
      console.log('====================================');
      console.log(tipo);
      console.log('====================================');
      this.objGuardarTipo=tipo;
      this.objetoTipo._id=this.objGuardarTipo.tipo._id; 
       this.btnAgregarTipoVisible=false;
    });
  }
}

objetoProveedor:Proveedor={
  nombreProv:"",
  descripcionProv:"",
  productosProv:[]
}
objProv;
guardarProveedor(event){
  if(event.keyCode==13){
    this.objetoProveedor.nombreProv=this.nombreProveedor;
    this.httpProveedores.guardarProveedor(this.objetoProveedor).subscribe(proveedor=>{
      this.btnAgregarProvVisible=false;
      this.objProv=proveedor;
     this.objetoProveedor._id=this.objProv.proveedor._id;
     this.btnAgregarTipoVisible=false;
      console.log('====================================');
      console.log(this.objetoProveedor);
      console.log('====================================');
    });
  }
}

objetoTags:Tags={
  nombreTag:""
}
objTags;
guardarTags(event){
 
if(event.keyCode==13){
  this.objetoTags.nombreTag=this.nombreTag;
  this.httpTags.guardarTag(this.objetoTags).subscribe(tags=>{
    this.objTags=tags;
     this.nombreTag="";
     this.btnAgregarTagsVisible=false;
     console.log('====================================');
     console.log(this.objTags);
     console.log('====================================');
    this.arrayTagsSeleccionadas.push(this.objTags.tag);
    });
 }
}


listaColeccionesVisible=false;
btnAgregarColeccionVisible=false;
arrayColeccionesBusqueda=[]
arrayColeccionesSeleccionadas:any[]=[];
nombreColeccion="";
buscarColecciones(){
  this.arrayColeccionesBusqueda=[];
  this.listaColeccionesVisible=true;
  if(this.nombreColeccion.length==0){
    this.listaColeccionesVisible=false;
  }
  
   for(let i=0;i<this.arrayColecciones.length;i++){
     if(this.arrayColecciones[i].nombreCol.search(this.nombreColeccion)==0){
        var index=this.arrayColecciones.indexOf(this.arrayColecciones[i]);
 
        this.arrayColeccionesBusqueda.push(this.arrayColecciones[index]);
   
     }else if(this.arrayColecciones[i].nombreCol.search(this.nombreColeccion)!=0){
     }
     
   }

}

agregarArrayColecciones(colecciones){
  this.arrayColeccionesSeleccionadas.push(colecciones);
  this.nombreColeccion="";
}



listaProvVisible=false;
btnAgregarProvVisible=false;
arrayProveedoresBusqueda=[]
nombreProveedor="";
buscarProveedor(){
  this.arrayProveedoresBusqueda=[];
  this.listaProvVisible=true;
  

  if(this.nombreProveedor.length==0){
    this.listaProvVisible=false;
  }
  
   for(let i=0;i<this.arrayProveedores.length;i++){
   
     if(this.arrayProveedores[i].nombreProv.search(this.nombreProveedor)==0){
       this.btnAgregarProvVisible=false;
        var index=this.arrayProveedores.indexOf(this.arrayProveedores[i]);
    
        this.arrayProveedoresBusqueda.push(this.arrayProveedores[index]);
        this.btnAgregarProvVisible=false;
     }else if(this.arrayProveedores[i].nombreProv.search(this.nombreProveedor)!=0){
       this.btnAgregarProvVisible=true;
     }else if(this.nombreProveedor!=this.arrayProveedores[i].nombreProv){
        this.btnAgregarProvVisible=false;
        console.log('====================================');
        console.log(this.btnAgregarProvVisible);
        console.log('====================================');
     }
     
   }

}


listaTipoVisible=false;
btnAgregarTipoVisible=false;
arrayTiposBusqueda=[]
nombreTipo="";
buscarTipo(){
  this.arrayTiposBusqueda=[];
  this.listaTipoVisible=true;
  if(this.nombreTipo.length==0){
    this.listaTipoVisible=false;
  }
  
   for(let i=0;i<this.arrayTipos.length;i++){
     if(this.arrayTipos[i].tipo.search(this.nombreTipo)==0){
       this.btnAgregarTipoVisible=false;
        var index=this.arrayTipos.indexOf(this.arrayTipos[i]);
        console.log('====================================');
        console.log(index);
        console.log('====================================');
        this.arrayTiposBusqueda.push(this.arrayTipos[index]);
        console.log('====================================');
        console.log(this.arrayTiposBusqueda);
        console.log('====================================');
     }else if(this.arrayTipos[i].tipo.search(this.nombreTipo)!=0){
       this.btnAgregarTipoVisible=true;
     }
     
   }

}


listaTagsVisible=false;
btnAgregarTagsVisible=false;
arrayTagsBusqueda=[]
arrayTagsSeleccionadas:any[]=[];
nombreTag="";
buscarTags(){
  this.arrayTagsBusqueda=[];
  this.listaTagsVisible=true;
  if(this.nombreTag.length==0){
    this.listaTagsVisible=false;
  }
  
   for(let i=0;i<this.objetosTags.length;i++){
     if(this.objetosTags[i].nombreTag.search(this.nombreTag)==0){
       this.btnAgregarTagsVisible=false;
        var index=this.objetosTags.indexOf(this.objetosTags[i]);
 
        this.arrayTagsBusqueda.push(this.objetosTags[index]);
   
     }else if(this.objetosTags[i].nombreTag.search(this.nombreTag)!=0){
       this.btnAgregarTagsVisible=true;
     }
     
   }

}

agregarArrayTags(tags){
  this.arrayTagsSeleccionadas.push(tags);
  this.nombreTag="";
}

guardarProducto(){

  this.objetoProducto.imagenesProd=this.arrayImagenesProducto;
  this.objetoProducto.tagsProd=this.arrayTagsSeleccionadas;
  this.objetoProducto.tipoProducto=this.objetoTipo;
  this.objetoProducto.proveedoresProd[0]=this.objetoProveedor;
  this.objetoProducto.coleccionesProd=this.arrayColeccionesSeleccionadas;
  let objProd;
  this.httpProducto.guardarProducto(this.objetoProducto).subscribe(producto=>{
    objProd=producto;
    for(let i=0;i<this.arrayColeccionesSeleccionadas.length;i++){
      this.arrayColeccionesSeleccionadas[i].productosCol.push(objProd.producto._id);
      this.httpColecciones.editarColeccion(this.arrayColeccionesSeleccionadas[i]._id,this.arrayColeccionesSeleccionadas[i]).subscribe(coleccion=>{
         console.log('====================================');
         console.log(coleccion);
         console.log('====================================');
      });
    }
    console.log('====================================');
    console.log(producto);
    console.log('====================================');
    this.router.navigate(['/admin/productos']);
  });
  
  /*
  this.httpProducto.guardarProducto(this.objetoProducto).subscribe(producto=>{
     console.log('====================================');
     console.log(producto);
     console.log('====================================');
  });
  */
  }


}
