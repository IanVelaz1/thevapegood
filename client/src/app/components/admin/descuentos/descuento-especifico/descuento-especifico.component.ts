import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PromocionService} from '../../../../services/promociones/promocion.service';
import { Promocion } from '../../../../interfaces/promociones';
import {Router} from '@angular/router';
@Component({
  selector: 'app-descuento-especifico',
  templateUrl: './descuento-especifico.component.html',
  styleUrls: ['./descuento-especifico.component.css']
})
export class DescuentoEspecificoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private httpPromociones:PromocionService,private router:Router) { }

  idDescuento:string;
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.idDescuento=params.id;
      this.recuperarDescuento();
    });
  }

  objetoPromocion:Promocion={
    nombreProm:"",
    descripcionProm:"",
    productosProm:[],
    precioProm:0,
    usosLimiteProm:0,
    fechasProm:[]
  }

  objProm;
  fechaInicio:Date;
  fechaFin:Date;
  arrayFechas:Date[]=[];
  recuperarDescuento(){

   this.httpPromociones.recuperarPromocionEspecifica(this.idDescuento).subscribe(descuento=>{
     this.objProm=descuento;
     this.objetoPromocion=this.objProm.promocion;
     let fechaI=new Date(this.objetoPromocion.fechasProm[0]);
     let fechaF=new Date(this.objetoPromocion.fechasProm[1]);
    this.arrayFechas=[fechaI,fechaF];
     console.log('====================================');
     console.log(this.objetoPromocion.fechasProm);
     console.log('====================================');
   });
  }

  objPromociones;
  arrayPromocionesRecuperadas:Promocion[]=[];
  nombreIgual:boolean=false;
  editarPromocion(){

    this.objetoPromocion.fechasProm=this.arrayFechas;
            this.httpPromociones.editarPromocion(this.idDescuento,this.objetoPromocion).subscribe(promocion=>{
             
              location.reload();
             });
  
  }



}
