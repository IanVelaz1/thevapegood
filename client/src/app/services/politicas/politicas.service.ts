import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PoliticasService {

  constructor(private httpClient:HttpClient) { }

  domain:string="http://localhost:8000";

  guardarPolitica(politicas){
   return this.httpClient.post(`/politicas`,politicas);
  }

  recuperarPoliticas(){
   return this.httpClient.get(`/politicas`);
  }

  editarPoliticas(id,politicas){
   return this.httpClient.put(`/politicas/`+id,politicas);
  }

}
