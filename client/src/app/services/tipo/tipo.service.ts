import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TipoService {

  constructor(private http:HttpClient) { }
  
  domain:string="http://localhost:8000";

  guardarTipo(tipo){
    return this.http.post(`/tipo`,tipo);
  }

  recuperarTipos(){
    return this.http.get(`/tipo`);
  }

  recuperarTipoEspecifico(id){
    return this.http.get(`/tipo/`+id);
  }

  eliminarTipo(id){
    return this.http.delete(`/tipo/`+id);
  }

}
