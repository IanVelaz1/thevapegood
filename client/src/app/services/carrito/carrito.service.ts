import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class CarritoService {

  constructor(private cookieService:CookieService) { }

  carritoExiste(){
    return this.cookieService.check('carrito');
  }

  agregarCarrito(carrito){
    return this.cookieService.set('carrito',carrito,10,"/");
  }

  recuperarProductosCarrito(){
   return this.cookieService.get('carrito');
  }

  eliminarProductosCarrito(){
    this.cookieService.delete('carrito');
  }

}
