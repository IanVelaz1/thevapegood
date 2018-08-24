import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class NavbarService {
  domain:string="http://localhost:8000";

  constructor(private http:HttpClient) { }
  
  guardarNavbar(navbar){
   return this.http.post(`/navbar`,navbar);
  }

  recuperarNavbar(){
    return this.http.get(`/navbar`);
  }

  recuperarNavbarById(id){
    return this.http.get(`/navbar/`+id);
  }

  editarNavbar(id,navbar){
    return this.http.put(`/navbar/`+id,navbar);
  }

  eliminarNavbar(id){
    return this.http.delete(`/navbar/`+id);
  }

}
