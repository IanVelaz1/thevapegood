import { Component, OnInit } from '@angular/core';
import {UploadEvent,UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import {DomSanitizer} from '@angular/platform-browser';
import {ChangeDetectorRef} from '@angular/core';
import {SubirFotosService} from '../../../../services/uploadPhotos/subir-fotos.service';
import {PaginasService} from '../../../../services/paginas/paginas.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-agregar-pagina',
  templateUrl: './agregar-pagina.component.html',
  styleUrls: ['./agregar-pagina.component.css']
})
export class AgregarPaginaComponent implements OnInit {

  

  constructor(private httpPaginas:PaginasService, private sanitizer:DomSanitizer, private ref:ChangeDetectorRef, private httpFotos:SubirFotosService) { }

  ngOnInit() {
    setInterval(()=>{
        this.ref.markForCheck();
    },500);
  }

  public fotosCar:UploadFile[]=[];
  public fotosColl:UploadFile[]=[];

  fotosCarousel:any[]=[];
  fotosColeccion:any[]=[];

  uploading:boolean=false;


  objetoImagenSubidaCar;
  public dropped(event:UploadEvent){
    this.uploading=true;
    this.fotosCar=event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
        //console.log(droppedFile.relativePath, file);
 
          
          // You could upload it like this:
          const formData = new FormData()
          formData.append('file', file, droppedFile.relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
              
    
            
          this.httpFotos.subirFoto(formData).subscribe(img=>{
            this.objetoImagenSubidaCar=img;
            if(this.objetoImagenSubidaCar.success==true){
              this.fotosCarousel.unshift(this.objetoImagenSubidaCar.result)
              console.log(this.objetoImagenSubidaCar);
              console.log(this.fotosCarousel);
              this.uploading=false;              
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
        console.log(droppedFile.relativePath, fileEntry);
      }
  }

}

objetoImagenSubidaColl;
public droppedCollection(event:UploadEvent){
  this.uploading=true;
  this.fotosColl=event.files;
  for (const droppedFile of event.files) {
    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {

        // Here you can access the real file
      //console.log(droppedFile.relativePath, file);

        
        // You could upload it like this:
        const formData = new FormData()
        formData.append('file', file, droppedFile.relativePath)

        // Headers
        const headers = new HttpHeaders({
          'security-token': 'mytoken'
        })
            
  
          
        this.httpFotos.subirFoto(formData).subscribe(img=>{
          this.objetoImagenSubidaColl=img;
          if(this.objetoImagenSubidaColl.success==true){
            this.fotosColeccion.unshift(this.objetoImagenSubidaColl.result)
            console.log(this.objetoImagenSubidaColl);
            console.log(this.fotosColeccion);  
            this.uploading=false;            
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
      console.log(droppedFile.relativePath, fileEntry);
    }
}

}
    eliminarFotoCar(id){
      console.log('====================================');
      console.log(id);
      console.log('====================================');
      for(let i=0;i<this.fotosCarousel.length;i++){
         if(id==this.fotosCarousel[i].public_id){
           this.fotosCarousel.splice(i,1);
           this.httpFotos.eliminarImagen(id).subscribe(fotos=>{
          
           });
         }
      }
    }

    eliminarFotoCol(id){
      for(let i=0;i<this.fotosColeccion.length;i++){
        if(id==this.fotosColeccion[i].public_id){
          this.fotosColeccion.splice(i,1);
          this.httpFotos.eliminarImagen(id).subscribe(fotos=>{
         
          });
        }
     }
    }

    objetoPagina={
      titulo:"",
      descripcion:"",
      urlVideo:"",
      hovered:false,
      imagenesCarousel:this.fotosCarousel,
      imagenesColeccion:this.fotosColeccion
    }

    guardarPagina(){
      this.httpPaginas.guardarPagina(this.objetoPagina).subscribe(pagina =>{
        console.log('====================================');
        console.log(pagina);
        console.log('====================================');
      });
    }

}
