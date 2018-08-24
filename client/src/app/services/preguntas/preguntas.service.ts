import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PreguntasService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000"

  guardarPregunta(pregunta){
    return this.http.post(`/pregunta`,pregunta);
  }

  recuperarPreguntas(){
    return this.http.get(`/pregunta`);
  }

  recuperarPreguntaEspecifica(id){
    return this.http.get(`/pregunta/`+id);
  }

  editarPregunta(id,pregunta){
    return this.http.put(`/pregunta/`+id,pregunta);
  }

  eliminarPregunta(id){
    return this.http.delete(`/pregunta/`+id);
  }


}
