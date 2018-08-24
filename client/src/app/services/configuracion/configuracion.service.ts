import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class ConfiguracionService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000"

  guardarConfiguracion(configuracion){
   return this.http.post(`/configuracion`,configuracion);
  }

  recuperarConfiguracion(){
   return this.http.get(`/configuracion`);
  }

  editarConfiguracion(id,configuracion){
    return this.http.put(`/configuracion/`+id,configuracion);
  }

}
