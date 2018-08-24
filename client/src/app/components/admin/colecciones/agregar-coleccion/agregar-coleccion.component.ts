import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {ColeccionesService} from '../../../../services/colecciones/colecciones.service';
import {Coleccion} from '../../../../interfaces/colecciones';
import {Router} from '@angular/router';
import {UploadEvent,UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import {SubirFotosService} from '../../../../services/uploadPhotos/subir-fotos.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-agregar-coleccion',
  templateUrl: './agregar-coleccion.component.html',
  styleUrls: ['./agregar-coleccion.component.css']
})
export class AgregarColeccionComponent implements OnInit {

  objetoColeccion:Coleccion={
    nombreCol:'',
    descripcionCol:'',
     productosCol:[]
  }

  
  public archivos:UploadFile[]=[];

  arrayImagenesProducto:any[]=[];
  objetoImagenSubida;
  visibleImagenes:boolean=true;

  constructor(private httpColecciones:ColeccionesService, private router:Router, private imagenService:SubirFotosService,private ref:ChangeDetectorRef) { }

  ngOnInit() {
    setInterval(()=>{
      this.ref.markForCheck();
    },500);
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
              this.arrayImagenesProducto.unshift(this.objetoImagenSubida.result);        
              console.log('====================================');
              console.log(this.arrayImagenesProducto);
              console.log('====================================');   
            }
            if(this.arrayImagenesProducto.length>0){
              this.visibleImagenes=false; 
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

public fileOver(event){

}

public fileLeave(event){

}

eliminarFoto(id){
   this.arrayImagenesProducto.splice(0,1);
   this.imagenService.eliminarImagen(id).subscribe(imagen=>{
     this.visibleImagenes=true;
   });
   
}

guardarColeccion(){
  if(this.arrayImagenesProducto.length>0){
    this.objetoColeccion.imagenCol=this.arrayImagenesProducto[0];
  }
  this.httpColecciones.guardarColeccion(this.objetoColeccion).subscribe(coleccion=>{
    this.router.navigate(['/admin/colecciones']);
  });
  
}

}
