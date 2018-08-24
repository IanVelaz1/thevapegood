import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProveedorService {

  constructor(private http:HttpClient) { }
  
  domain:string="http://localhost:8000";

  guardarProveedor(proveedor){
    return this.http.post(`/proveedor`,proveedor);
  }

  recuperarProveedores(){
    return this.http.get(`/proveedor`);
  }

  recuperarProveedorEspecifico(id){
    return this.http.get(`/proveedor/`+id);
  }

  editarProveedor(id,proveedor){
    return this.http.put(`/proveedor/`+id,proveedor);
  }

  eliminarProveedor(id){
    return this.http.delete(`/proveedor/`+id);
  }

}
