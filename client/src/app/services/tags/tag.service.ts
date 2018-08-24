import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TagService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000";

  guardarTag(tag){
    return this.http.post(`/tag`,tag);
  }

  recuperarTags(){
    return this.http.get(`/tag`);
  }
  
  recuperarTagEspecifica(id){
    return this.http.get(`/tag/`+id);
  }

  eliminarTag(id){
    return this.http.delete(`/tag/`+id);
  }

}
