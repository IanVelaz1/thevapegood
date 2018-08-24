import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VentasService {

  constructor(private http:HttpClient) { }
  domain:String='http://localhost:8000';

  guardarVenta(venta){
    this.http.post(`/venta`,venta);
  }

  recuperarVentas(){
    this.http.get(`/venta`);
  }

  recuperarVentaEspecifica(id){
    this.http.get(`/venta/`+id);
  }

  editarVenta(id,venta){
    this.http.put(`/venta/`+id,venta);
  }

  eliminarVenta(id){
    this.http.delete(`/venta`+id);
  }

}
