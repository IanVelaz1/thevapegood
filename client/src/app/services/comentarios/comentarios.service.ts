import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class ComentariosService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000"
 
  guardarComentarios(comentarios){
    return this.http.post(`/comentario`,comentarios);
  }

  recuperarComentarios(){
    return this.http.get(`/comentario`);
  }

  recuperarComentarioEspecifico(id){
    return this.http.get(`/comentario/`+id); 
  }

  editarComentario(id,comentario){
    return this.http.put(`/comentario/`+id,comentario);
  }

  eliminarComentario(id){
    return this.http.delete(`/comentario/`+id)
  }

}
