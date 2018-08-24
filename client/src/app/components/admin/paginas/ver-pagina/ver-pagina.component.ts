import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {SubirFotosService} from '../../../../services/uploadPhotos/subir-fotos.service';
import {PaginasService} from '../../../../services/paginas/paginas.service';
import { HttpHeaders } from '@angular/common/http';
import {UploadEvent,UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-ver-pagina',
  templateUrl: './ver-pagina.component.html',
  styleUrls: ['./ver-pagina.component.css']
})
export class VerPaginaComponent implements OnInit {

  constructor(private route:ActivatedRoute,private ref:ChangeDetectorRef,
  private httpPaginas:PaginasService,private httpFotos:SubirFotosService, private router:Router) { }
  id:string;
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
    });
    setInterval(()=>{
      this.ref.markForCheck();
    },500);
    this.obtenerPagina(this.id);
  }

 

  public fotosCar:UploadFile[]=[];
  public fotosColl:UploadFile[]=[];

  fotosCarousel:any[]=[];
  fotosColeccion:any[]=[];

  uploading:boolean=false;

  objetoPaginaRecuperada;

  
  obtenerPagina(id){
    this.httpPaginas.recuperarPaginaById(id).subscribe(pagina=>{
      console.log('====================================');
      console.log(pagina);
      console.log('====================================');
      this.objetoPaginaRecuperada=pagina;
      this.objetoPagina.titulo=this.objetoPaginaRecuperada.pagina.pagina.titulo;
      this.objetoPagina.descripcion=this.objetoPaginaRecuperada.pagina.pagina.descripcion;
      this.objetoPagina.urlVideo=this.objetoPaginaRecuperada.pagina.pagina.urlVideo;
      this.objetoPagina.imagenesCarousel=this.objetoPaginaRecuperada.pagina.pagina.imagenesCarousel;
      this.objetoPagina.imagenesColeccion=this.objetoPaginaRecuperada.pagina.pagina.imagenesColeccion;

    });
  }

 
  


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
              this.objetoPagina.imagenesCarousel.unshift(this.objetoImagenSubidaCar.result)
              console.log(this.objetoImagenSubidaCar);
              console.log(this.objetoPagina.imagenesCarousel);
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
            this.objetoPagina.imagenesColeccion.unshift(this.objetoImagenSubidaColl.result)
            console.log(this.objetoImagenSubidaColl);
            console.log(this.objetoPagina.imagenesColeccion);  
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
      for(let i=0;i<this.objetoPagina.imagenesCarousel.length;i++){
         if(id==this.objetoPagina.imagenesCarousel[i].public_id){
           this.objetoPagina.imagenesCarousel.splice(i,1);
           this.httpFotos.eliminarImagen(id).subscribe(fotos=>{
          
           });
         }
      }
    }

    eliminarFotoCol(id){
      for(let i=0;i<this.objetoPagina.imagenesColeccion.length;i++){
        if(id==this.objetoPagina.imagenesColeccion[i].public_id){
          this.objetoPagina.imagenesColeccion.splice(i,1);
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
      imagenesCarousel:[],
      imagenesColeccion:[]
    }
    

    editarPagina(){

      console.log('====================================');
      console.log(this.objetoPagina);
      console.log('====================================');
      
      this.httpPaginas.editarPagina(this.id,this.objetoPagina).subscribe(pagina =>{
        console.log('====================================');
        console.log(pagina);
        console.log('====================================');
      });
    }

    eliminarPagina(){
      this.httpPaginas.eliminarPagina(this.id).subscribe(pagina=>{
         this.router.navigate(['/admin/paginas']);
      });
    }



}
