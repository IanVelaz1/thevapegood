import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class EventoService {
   
  domain:string="http://localhost:8000";
   
  constructor(private httpClient:HttpClient) {

   }

   guardarEvento(evento){
    return this.httpClient.post(`/evento`,evento);
   }

   recuperarEventos(){
    return this.httpClient.get(`/evento`);
   }

   recuperarEventoEspecifico(id){
     return this.httpClient.get(`/evento/`+id);
   }

   editarEventoEspecifico(id,evento){
     return this.httpClient.put(`/evento/`+id,evento);
   }

   eliminarEventos(id){
     return this.httpClient.delete(`/evento/`+id);
   }

}
