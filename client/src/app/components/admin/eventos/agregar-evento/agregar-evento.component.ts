import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Evento} from '../../../../interfaces/evento';
import {UploadEvent,UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import {SubirFotosService} from '../../../../services/uploadPhotos/subir-fotos.service';
import {EventoService} from '../../../../services/eventos/evento.service';
import {Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {

  constructor(private imagenService:SubirFotosService,private eventoHttp:EventoService,private router:Router,private ref:ChangeDetectorRef) { }

  ngOnInit() {
    setInterval(()=>{
      this.ref.markForCheck();
    },500);
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
              console.log(this.objetoImagenSubida);
              console.log(this.arrayImagenesProducto);              
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

objetoEvento:Evento={
  titulo:'',
  descripcion:'',
  imagenes:this.arrayImagenesProducto,
  precio:0
}


objetoEventoGuardado;
guardarEvento(){

  console.log('====================================');
  console.log(this.objetoEvento);
  console.log('====================================');

  this.eventoHttp.guardarEvento(this.objetoEvento).subscribe(evento=>{
    this.objetoEventoGuardado=evento;
    console.log('====================================');
    console.log(evento);
    console.log('====================================');
  });
}

eliminarFotoCol(id){
  for(let i=0;i<this.arrayImagenesProducto.length;i++){
    if(id==this.arrayImagenesProducto[i].public_id){
      this.arrayImagenesProducto.splice(i,1);
      this.imagenService.eliminarImagen(id).subscribe(fotos=>{
     
      });
    }
 }
}

  

}
