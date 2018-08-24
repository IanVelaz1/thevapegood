import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class SubirFotosService {

  constructor(private http:HttpClient) { }
   domain:String='http://localhost:8000';

   
  subirFoto(foto){
    return this.http.post(`/imagenes/subir`,foto);
  }

  recuperarFotos(){
    return this.http.get(`/imagenes/subir`);
  }

  recuperarFotoById(id){
    return this.http.get(`/imagenes/subir/`+id);
  }

  eliminarImagen(id){
    return this.http.delete(`/imagenes/`+id);
  }
}
