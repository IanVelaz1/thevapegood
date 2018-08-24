import { Component, OnInit } from '@angular/core';
import {ImpuestosService} from '../../.././../services/impuestos/impuestos.service';
import {Impuesto} from '../../../../interfaces/impuestos';
@Component({
  selector: 'app-impuestos',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.css']
})
export class ImpuestosComponent implements OnInit {

  constructor(private httpImpuesto:ImpuestosService) { }

  ngOnInit() {
    this.recuperarImpuestos();
  }

  objetoImpuestos:Impuesto={
    impuestosIncluidos:false,
    tasaImpuesto:0
  }

  guardarImpuestos(){
    this.httpImpuesto.guardarImpuestos(this.objetoImpuestos).subscribe(impuesto=>{
      location.reload();
    });
  }

  objImpuesto;
  editable:boolean=false;
  recuperarImpuestos(){
    this.httpImpuesto.recuperarImpuestos().subscribe(impuesto=>{
      this.objImpuesto=impuesto;
      if(this.objImpuesto.impuesto.length>0){
        this.objetoImpuestos=this.objImpuesto.impuesto[0];
        this.editable=true;
      }
       
    });
  }

  editarImpuestos(){
    this.httpImpuesto.editarImpuesto(this.objetoImpuestos._id,this.objetoImpuestos).subscribe(impuesto=>{
      location.reload();
    });
  }

}
