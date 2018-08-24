import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class InterfazService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000";

  guardarInterfaz(interfaz){
    return this.http.post(`/interfaz`,interfaz);
  }

  recuperarInterfaz(){
    return this.http.get(`/interfaz`);
  }

  editarInterfaz(id,interfaz){
    return this.http.put(`/interfaz/`+id,interfaz);
  }

  recuperarNavbar(){
    return this.http.get(`/interfaz/navbar`);
  }

}
