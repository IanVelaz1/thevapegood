import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class RespuestaService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000";

  guardarRespuesta(respuesta){
    return this.http.post(`/respuesta`,respuesta);
  }

  recuperarRespuestas(){
    return this.http.get(`/respuesta`);
  }

  recuperarRespuestaEspecifica(id){
    return this.http.get(`/respuesta/`+id);
  }

  editarRespuesta(id,respuesta){
    return this.http.put(`/respuesta`+id,respuesta);
  }

  

}
