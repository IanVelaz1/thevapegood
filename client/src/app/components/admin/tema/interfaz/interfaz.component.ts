import { Component, OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { UploadFile, UploadEvent, FileSystemFileEntry, FileSystemDirectoryEntry } from '../../../../../../node_modules/ngx-file-drop';
import { HttpHeaders } from '../../../../../../node_modules/@angular/common/http';
import {SubirFotosService} from '../../../../services/uploadPhotos/subir-fotos.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { interfaz } from '../../../../interfaces/interfaz';
import {NavbarService} from '../../../../services/navbar-crear/navbar.service';
import { Navegacion } from '../../../../interfaces/navegacion';
import {InterfazService} from '../../../../services/interfaz/interfaz.service';
import {ColeccionesService} from '../../../../services/colecciones/colecciones.service';
import { Coleccion } from '../../../../interfaces/colecciones';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent implements OnInit {

  constructor(private imagenService:SubirFotosService,private ref:ChangeDetectorRef,private modalService: BsModalService,private httpNavbar:NavbarService,private interfazService:InterfazService,private httpColecciones:ColeccionesService) { }

  ngOnInit() {
    setInterval(()=>{
      this.ref.markForCheck();
    },500); 
    this.recuperarMenus();
    this.recuperarInterfaz();
    this.recuperarColecciones();
  }

  public archivos:UploadFile[]=[];

  arrayImagenesProducto:any[]=[];
  objetoImagenSubida;
  modalCarousel:BsModalRef; 
  modalSeccionIzquierda:BsModalRef;
  modalWidget2:BsModalRef;

  idInterfaz:string="";

  objetoInterfaz:interfaz={
    isEditable:false,
    objetosCarousel:[],
    objetoMenuSuperior:{},
    imagenesDerechaSuperior:{},
    imagenesIzquierda:[],
    objetoWidgetIzquierda1:{},
    arrayObjetosWidget2:[],
    coleccionesSeccionesProd:{},
    imagenesWidgetDerecha:{},
    objetoMenuFooter:{}
  }

  objetoCarousel={
    imagenCarousel:{},
    texto:"",
    textoBoton:"",
    urlExterno:""
  }

  objetoMenuSuperior={
    idMenuSuperior:""
  }

  imagenesDerechaSuperior={
    imagenSuperior:{
      secure_url:"",
      urlExterno:""
    },
    imagenInferior:{
      secure_url:"",
      urlExterno:""
    }
  }

  objetoWidgetIzquierda1={
    idColeccion:""
  }

  coleccionesSeccionesProd={
    idColeccion1:"",
    idColeccion2:""
  }

  imagenesWidgetDerecha={
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

  objetoMenuFooter={
    idMenu:""
  }

 arrayObjetosCarousel:any[]=[];
 arrayObjetosWidget2:any[]=[];


  objNavbar;
  arrayNavbar:Navegacion[]=[];
  arrayMenusP:Navegacion[]=[];
  recuperarMenus(){
    this.httpNavbar.recuperarNavbar().subscribe(navbar=>{
       this.objNavbar=navbar;
        this.arrayNavbar=this.objNavbar.navbar;
        for(let i=0;i<this.arrayNavbar.length;i++){
           if(this.arrayNavbar[i].esSubMenu==false){
             this.arrayMenusP.push(this.arrayNavbar[i]);
           }
        }
       console.log('====================================');
       console.log(this.arrayMenusP);
       console.log('====================================');
    });
  }

  objInterfaz;
  objetoInterfazRecuperada:any={
    objetoMenuSuperior:{},
    objetosCarousel:[],
    imagenesDerechaSuperior:{},
    imagenesIzquierda:[],
    objetoWidgetIzquierda1:{},
    arrayObjetosWidget2:[],
    coleccionesSeccionesProd:{},
    imagenesWidgetDerecha:{},
    objetoMenuFooter:{}
  }

  imagenesIzquierda:any[]=[];


  recuperarInterfaz(){
    this.interfazService.recuperarInterfaz().subscribe(interfaz=>{
      this.objInterfaz=interfaz;
      if(this.objInterfaz.interfaz.length>0){
        this.objetoInterfaz._id=this.objInterfaz.interfaz[0]._id;
        this.objetoInterfaz.isEditable=this.objInterfaz.interfaz[0].isEditable;
        this.objetoInterfazRecuperada=this.objInterfaz.interfaz[0];
         this.objetoMenuSuperior=this.objetoInterfazRecuperada.objetoMenuSuperior;
         this.arrayObjetosCarousel=this.objetoInterfazRecuperada.objetosCarousel
         this.imagenesDerechaSuperior=this.objetoInterfazRecuperada.imagenesDerechaSuperior
         this.idInterfaz=this.objetoInterfazRecuperada._id;
         this.imagenesIzquierda=this.objetoInterfazRecuperada.imagenesIzquierda;
         this.objetoWidgetIzquierda1=this.objetoInterfazRecuperada.objetoWidgetIzquierda1;
         this.arrayObjetosWidget2=this.objetoInterfazRecuperada.arrayObjetosWidget2;
         this.coleccionesSeccionesProd=this.objetoInterfazRecuperada.coleccionesSeccionesProd;
         this.imagenesWidgetDerecha=this.objetoInterfazRecuperada.imagenesWidgetDerecha;
         this.objetoMenuFooter=this.objetoInterfazRecuperada.objetoMenuFooter
      }
       console.log('====================================');
       console.log(this.objInterfaz);
       console.log('====================================');
    }); 
  }

  objetoColecciones;
  arrayColecciones:Coleccion[]=[];
  recuperarColecciones(){
    this.httpColecciones.recuperarColecciones().subscribe(colecciones=>{
      this.objetoColecciones=colecciones;
      this.arrayColecciones=this.objetoColecciones.colecciones;
       console.log('====================================');
       console.log(this.arrayColecciones);
       console.log('====================================');
    });
  }

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
              this.objetoCarousel.imagenCarousel=this.objetoImagenSubida.result;
              console.log('====================================');
              console.log(this.objetoCarousel);
              console.log('====================================');          
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

 public droppedImgDer1(event:UploadEvent){
   
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
            this.imagenesDerechaSuperior.imagenSuperior=this.objetoImagenSubida.result;
            console.log('====================================');
            console.log(this.imagenesDerechaSuperior);
            console.log('====================================');          
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

public droppedImgDer2(event:UploadEvent){
   
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
            this.imagenesDerechaSuperior.imagenInferior=this.objetoImagenSubida.result;
            console.log('====================================');
            console.log(this.imagenesDerechaSuperior);
            console.log('====================================');          
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

 fileOver(event){

 }

 agregarElementoCarousel(template: TemplateRef<any>){
  this.objetoCarousel={
    imagenCarousel:{},
    texto:"",
    textoBoton:"",
    urlExterno:""
  }
  this.objetoCarouselEditable=false;
  this.modalCarousel = this.modalService.show(template);
 }

 agregarImagenCarousel(){
  const copia=Object.assign({},this.objetoCarousel);
  this.arrayObjetosCarousel.push(copia);
  console.log('====================================');
  console.log(this.arrayObjetosCarousel);
  console.log('====================================');
  this.objetoCarousel={
    imagenCarousel:{},
    texto:"",
    textoBoton:"",
    urlExterno:""
  }
 }

 objetoCarouselEditable:boolean=false;
 verObjetoCarousel(id,template: TemplateRef<any>){
   this.objetoCarouselEditable=true;
   this.modalCarousel=this.modalService.show(template);
   for(let i=0;i<this.arrayObjetosCarousel.length;i++){
     if(this.arrayObjetosCarousel[i].imagenCarousel.public_id==id){
       this.objetoCarousel=this.arrayObjetosCarousel[i];
     }
   }
 }

 eliminarImagen(id){
   this.imagenService.eliminarImagen(id).subscribe(imagen=>{
    for(let i=0;i<this.arrayObjetosCarousel.length;i++){
      if(this.arrayObjetosCarousel[i].imagenCarousel.public_id==id){
        this.arrayObjetosCarousel[i].imagenCarousel={};
        this.objetoCarousel.imagenCarousel={};
      }
    }
   });
 }

 eliminarObjetoCarousel(id){
  for(let i=0;i<this.arrayObjetosCarousel.length;i++){
    if(this.arrayObjetosCarousel[i].imagenCarousel.public_id==id){
      this.arrayObjetosCarousel.splice(i,1);
    }
  }
 }



 imagenIzquierda:any={
   imagen:{},
   url:""
 }

 
 imagenIzquierdaEditable:boolean=false;

 agregarElementoIzquierda(template:TemplateRef<any>){
  this.imagenIzquierdaEditable=false;
    this.modalSeccionIzquierda=this.modalService.show(template);
 }


 public droppedImagenesIz(event:UploadEvent){
   
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
            this.imagenIzquierda.imagen=this.objetoImagenSubida.result;
              console.log('====================================');
              console.log(this.imagenIzquierda);
              console.log('====================================');
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

agregarImagenIzquierda(){
  const copia=Object.assign({},this.imagenIzquierda);
  this.imagenesIzquierda.push(copia);
  this.imagenIzquierda={
    imagen:{},
    url:""
  }
}



verImagenIzquierda(id,template:TemplateRef<any>){
 for(let i=0;i<this.imagenesIzquierda.length;i++){
  if(id==this.imagenesIzquierda[i].imagen.public_id){
    this.imagenIzquierda=this.imagenesIzquierda[i];
    this.imagenIzquierdaEditable=true;
    this.modalSeccionIzquierda=this.modalService.show(template);
  }
 }
}

 eliminarObjetoIzquierda(id){
   for(let i=0;i<this.imagenesIzquierda.length;i++){
     if(id==this.imagenesIzquierda[i].imagen.public_id){
       this.imagenesIzquierda.splice(i,1);
     }
   }
 }

 
 objetoWidget2={
  imagen:{},
  texto:""
}
 
 imagenWidget2Editable:boolean=false;

 public droppedImageneswidget2(event:UploadEvent){
   
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
            this.objetoWidget2.imagen=this.objetoImagenSubida.result;
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



 agregarWidget2(template:TemplateRef<any>){
   this.objetoWidget2={
     imagen:{},
     texto:""
   }
   this.imagenWidget2Editable=false;
  this.modalWidget2=this.modalService.show(template);
 }

 copiarWidget2(){
   const obj=Object.assign({},this.objetoWidget2);
   this.arrayObjetosWidget2.push(obj);
 }

 verObjetoWidget2(id,template:TemplateRef<any>){
   for(let i=0;i<this.arrayObjetosWidget2.length;i++){
     if(id==this.arrayObjetosWidget2[i].imagen.public_id){
       this.objetoWidget2=this.arrayObjetosWidget2[i];
       this.imagenWidget2Editable=true;
       this.modalWidget2=this.modalService.show(template);
     }
   }
 }
  

 guardarInterfaz(){
   this.objetoInterfaz={
     isEditable:true,
     imagenesDerechaSuperior:this.imagenesDerechaSuperior,
     objetosCarousel:this.arrayObjetosCarousel,
     objetoMenuSuperior:this.objetoMenuSuperior,
     imagenesIzquierda:this.imagenesIzquierda,
     objetoWidgetIzquierda1:this.objetoWidgetIzquierda1,
     arrayObjetosWidget2:this.arrayObjetosWidget2,
     coleccionesSeccionesProd:this.coleccionesSeccionesProd,
     imagenesWidgetDerecha:this.imagenesWidgetDerecha,
     objetoMenuFooter:this.objetoMenuFooter
   }
   this.interfazService.guardarInterfaz(this.objetoInterfaz).subscribe(interfaz=>{
     location.reload();
     console.log('====================================');
     console.log(interfaz);
     console.log('====================================');
   });
 }

 editarInterfaz(){
  this.objetoInterfaz={
    isEditable:true,
    imagenesDerechaSuperior:this.imagenesDerechaSuperior,
    objetosCarousel:this.arrayObjetosCarousel,
    objetoMenuSuperior:this.objetoMenuSuperior,
    imagenesIzquierda:this.imagenesIzquierda,
    objetoWidgetIzquierda1:this.objetoWidgetIzquierda1,
    arrayObjetosWidget2:this.arrayObjetosWidget2,
    coleccionesSeccionesProd:this.coleccionesSeccionesProd,
    imagenesWidgetDerecha:this.imagenesWidgetDerecha,
    objetoMenuFooter:this.objetoMenuFooter
  }

  console.log('====================================');
  console.log(this.objetoInterfaz);
  console.log('====================================');
  
   this.interfazService.editarInterfaz(this.idInterfaz,this.objetoInterfaz).subscribe(interfaz=>{
       location.reload();
   });
 }
}
