import { Component, OnInit } from '@angular/core';
import {NotificacionesService} from '../../../../services/notificaciones/notificaciones.service';
import {Notificacion} from '../../../../interfaces/notificaciones';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

  constructor(private httpNotificacion:NotificacionesService) { }

  ngOnInit() {
   this.buscarNotificaciones();
  }

  objetoNotificaciones:Notificacion={
    
   confirmacionOrden:{
     asunto:"",
     mensaje:""
   },
   ordenCancelada:{
     asunto:"",
     mensaje:""
   },
   reembolsoOrden:{
    asunto:"",
    mensaje:""
   },
   confirmacionEnvio:{
    asunto:"",
    mensaje:""
   },
   pedidoEnviado:{
    asunto:"",
    mensaje:""
   },
   pedidoEntregado:{
    asunto:"",
    mensaje:""
   },
   confirmacionCliente:{
    asunto:"",
    mensaje:""
   },
   cambioPassword:{
    asunto:"",
    mensaje:""
   },
   confirmacionOrdenAdmin:{
    asunto:"",
    mensaje:""
   }

  }

  objNotificacion;
  isEditable:boolean=false;
  buscarNotificaciones(){
    this.httpNotificacion.recuperarNotificaciones().subscribe(notificaciones=>{
      this.objNotificacion=notificaciones;
      if(this.objNotificacion.notificacion.length>0){
        this.objetoNotificaciones=this.objNotificacion.notificacion[0];
        this.isEditable=true;
      }
    });
  }
  
  guardarNotificaciones(){
    this.httpNotificacion.guardarNotificaciones(this.objetoNotificaciones).subscribe(notificaciones=>{
      location.reload();
    });
  }

  editarNotificaciones(){
    this.httpNotificacion.editarNotificaciones(this.objetoNotificaciones._id,this.objetoNotificaciones).subscribe(notificaciones=>{
       location.reload();
    });
  }


}
