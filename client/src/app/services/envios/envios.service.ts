import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EnviosService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000";

  recuperarEnvios(){
    return this.http.get(`/envios`);
  }

  guardarEnvio(envio){
    return this.http.post(`/envios`,envio);
  }

  recuperarEnvioEspecifico(id){
    return this.http.get(`/envios/`+id);
  }

  editarEnvio(id,envio){
    return this.http.put(`/envios/`+id,envio);
  }

  eliminarEnvio(id){
    return this.http.delete(`/envios/`+id);
  }




}
