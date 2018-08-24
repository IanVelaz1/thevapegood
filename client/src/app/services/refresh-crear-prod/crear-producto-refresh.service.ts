import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class CrearProductoRefreshService {

  

  constructor() { }

  array;

  public getArray(arr){
    this.array=arr;
  }

 public returnArray(){
    return Observable.of( this.array);
  }

}
