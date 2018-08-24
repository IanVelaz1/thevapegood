import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {ColeccionesService} from '../../../../services/colecciones/colecciones.service';
import { FileSystemDirectoryEntry, FileSystemFileEntry, UploadFile, UploadEvent } from 'ngx-file-drop';
import { Coleccion } from '../../../../interfaces/colecciones';
import { HttpHeaders } from '@angular/common/http';
import {SubirFotosService} from '../../../../services/uploadPhotos/subir-fotos.service';
@Component({
  selector: 'app-coleccion-especifica',
  templateUrl: './coleccion-especifica.component.html',
  styleUrls: ['./coleccion-especifica.component.css']
})
export class ColeccionEspecificaComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private httpColecciones:ColeccionesService,private ref:ChangeDetectorRef,private imagenService:SubirFotosService) { }

  idColeccion;

  ngOnInit() {
    setInterval(()=>{
    this.ref.markForCheck();
    },500);
    this.route.params.subscribe(params=>{
     this.idColeccion=params.id;
    });
   this.recuperarColeccionEspecifica();
  }

  
  objetoColeccion:Coleccion={
    nombreCol:'',
    descripcionCol:'',
     imagenCol:{},
     productosCol:[]
  }
  objCol;
  visibleImagenes:boolean=true;
  recuperarColeccionEspecifica(){
   this.httpColecciones.recuperarColeccionEspecifica(this.idColeccion).subscribe(coleccion=>{
     this.objCol=coleccion;
     this.objetoColeccion=this.objCol.coleccion;
     if(this.objetoColeccion.imagenCol){
      this.arrayImagenesProducto.unshift(this.objetoColeccion.imagenCol);
      this.visibleImagenes=false;
     }
     
     console.log('====================================');
     console.log(coleccion);
     console.log('====================================');
   });
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
              this.arrayImagenesProducto.unshift(this.objetoImagenSubida.result);        
              console.log('====================================');
              console.log(this.arrayImagenesProducto);
              console.log('====================================');   
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

editarColeccion(){
  if(this.arrayImagenesProducto.length>0){
    this.objetoColeccion.imagenCol=this.arrayImagenesProducto[0];
  }
  this.httpColecciones.editarColeccion(this.idColeccion,this.objetoColeccion).subscribe(coleccion=>{
    this.router.navigate(['/admin/colecciones']);
  });
  
}

}
