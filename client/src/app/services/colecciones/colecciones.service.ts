import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class ColeccionesService {

  constructor(private http:HttpClient) { }
  domain:string="http://localhost:8000"

  guardarColeccion(coleccion){
   return this.http.post(`/coleccion`,coleccion);
  }

  recuperarColecciones(){
  return this.http.get(`/coleccion`);
  }

  recuperarColeccionEspecifica(id){
  return this.http.get(`/coleccion/`+id);
  }

  editarColeccion(id,coleccion){
  return this.http.put(`/coleccion/`+id,coleccion);
  }

  eliminarColeccion(id){
  return this.http.delete(`/coleccion/`+id);
  }
 
}

