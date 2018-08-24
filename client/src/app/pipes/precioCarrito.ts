import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:"multiCarrito"})
export class precioMultiCarritoPipe implements PipeTransform {
  transform(value:number,cantidad:string){
    let mul=parseFloat(cantidad);
    return value*mul;
  }
}