import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PromocionService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000";

  guardarPromocion(promocion){
    return this.http.post(`/promocion`,promocion);
  }

  recuperarPromociones(){
    return this.http.get(`/promocion`);
  }

  recuperarPromocionEspecifica(id){
    return this.http.get(`/promocion/`+id);
  }

  editarPromocion(id,promocion){
    return this.http.put(`/promocion/`+id,promocion);
  }

  eliminarPromocion(id){
    return this.http.delete(`/promocion`+id);
  }

}
