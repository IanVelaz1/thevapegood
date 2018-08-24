import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NotificacionesService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000";

  guardarNotificaciones(notificacion){
   return this.http.post(`/notificaciones`,notificacion);
  }

  recuperarNotificaciones(){
   return this.http.get(`/notificaciones`);
  }

  editarNotificaciones(id,notificacion){
   return this.http.put(`/notificaciones/`+id,notificacion);
  }

}
