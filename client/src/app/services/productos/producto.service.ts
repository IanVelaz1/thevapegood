import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductoService {

  constructor(private http:HttpClient) { }

  domain:string="http://localhost:8000";

  guardarProducto(producto){
    return this.http.post(`/producto`,producto);
  }

  recuperarProductos(){
    return this.http.get(`/producto`);
  }

  recuperarProductoEspecifico(id){
    return this.http.get(`/producto/`+id);
  }

  editarProducto(id,producto){
    return this.http.put(`/producto/`+id,producto);  
  }

  eliminarProducto(id){
    return this.http.delete(`/producto/`+id);
  }

}
