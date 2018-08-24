import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ImpuestosService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000";

  guardarImpuestos(impuesto){
  return this.http.post(`/impuesto`,impuesto);
  }

  recuperarImpuestos(){
  return this.http.get(`/impuesto`);
  }

  editarImpuesto(id,impuesto){
  return this.http.put(`/impuesto/`+id,impuesto)
  }

}
