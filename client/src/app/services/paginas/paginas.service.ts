import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class PaginasService {


  domain:string="http://localhost:8000";

  constructor(private http:HttpClient) { }

  guardarPagina(pagina){
    return this.http.post(`/pagina`,pagina);
  }

  recuperarPaginas(){
    return this.http.get(`/pagina`);
  }

  recuperarPaginaById(id){
    return this.http.get(`/pagina/`+id);
  }

  editarPagina(id,pagina){
    return this.http.put(`/pagina/`+id,pagina);
  }

  eliminarPagina(id){
    return this.http.delete(`/pagina/`+id);
  }

}
