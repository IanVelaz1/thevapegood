import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class VisitasService {

  constructor(private http:HttpClient) { }

  domain:String='http://localhost:8000';

  guardarVisita(visita){
    return this.http.post(`/visitas`,visita);
  }

  recuperarVisitas(){
    return this.http.get(`/visitas`);
  }

}
