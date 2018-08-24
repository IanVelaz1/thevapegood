import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import {UploadEvent,UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import {Evento} from '../../../interfaces/evento';
import {EventoService} from '../../../services/eventos/evento.service';
import {SubirFotosService} from '../../../services/uploadPhotos/subir-fotos.service';


@Component({
  selector: 'app-evento-especifico',
  templateUrl: './evento-especifico.component.html',
  styleUrls: ['./evento-especifico.component.css']
})
export class EventoEspecificoAdminComponent implements OnInit {

  idEvento:string="";

  constructor(private router:Router, private route:ActivatedRoute,private imagenService:SubirFotosService,private ref:ChangeDetectorRef,private eventoHttp:EventoService ) { }
   
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.idEvento=params.id;
      this.recuperarEvento(this.idEvento);
    });

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

objEventoRecuperado;
  recuperarEvento(id){
     this.eventoHttp.recuperarEventoEspecifico(id).subscribe(evento=>{
  
       this.objEventoRecuperado=evento;
       this.objetoEvento=this.objEventoRecuperado.evento;
       this.arrayImagenesProducto=this.objEventoRecuperado.evento.imagenes;
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

  editarEvento(){
    console.log('====================================');
    console.log(this.objetoEvento);
    console.log('====================================');
    
    this.eventoHttp.editarEventoEspecifico(this.idEvento,this.objetoEvento).subscribe(evento=>{
      console.log('====================================');
      console.log(evento);
      console.log('====================================');
      location.reload();
    });
   
  }

  eliminarEvento(){
    this.eventoHttp.eliminarEventos(this.idEvento).subscribe(evento=>{
      this.router.navigate(['/admin/eventos']);
    });
   }
}
