import { Component, OnInit } from '@angular/core';
import {VisitasService} from '../../../services/visitas/visitas.service';
import {InterfazService} from '../../../services/interfaz/interfaz.service';
@Component({
  selector: 'app-index-front',
  templateUrl: './index-front.component.html',
  styleUrls: ['./index-front.component.css']
})
export class IndexFrontComponent implements OnInit {

  constructor(private httpVisita:VisitasService, private interfazService:InterfazService) { }

  objetoVisita:any={
    fechaVisita:new Date()
  }

  ngOnInit() {
    this.recuperarInterfaz();
    
  }

  objInterfaz;
  objetoInterfazRecuperada:any={
    objetoMenuSuperior:{},
    objetosCarousel:[],
    imagenesDerechaSuperior:{},
    imagenesIzquierda:[],
    objetoWidgetIzquierda1:{},
    arrayObjetosWidget2:[],
    coleccionesSeccionesProd:{
      idColeccion1:"",
      idColeccion2:""
    },
    imagenesWidgetDerecha:{},
    objetoMenuFooter:{}
  }

  objetosComponenteCarousel:any={
   objetosCarousel:[],
   imagenesDerechaSuperior:{
     imagenSuperior:{

     },
     imagenInferior:{
       
     }
   }
  }

 

  recuperarInterfaz(){
    this.interfazService.recuperarInterfaz().subscribe(interfaz=>{
      this.objInterfaz=interfaz;
      if(this.objInterfaz.interfaz.length){
        this.objetoInterfazRecuperada=this.objInterfaz.interfaz[0];
        this.objetosComponenteCarousel.objetosCarousel=this.objetoInterfazRecuperada.objetosCarousel;
        this.objetosComponenteCarousel.imagenesDerechaSuperior=this.objetoInterfazRecuperada.imagenesDerechaSuperior;
      }
      this.guardarVisita();
    });
  }


  guardarVisita(){
    this.httpVisita.guardarVisita(this.objetoVisita).subscribe(visita=>{
      console.log('====================================');
      console.log(visita);
      console.log('====================================');
    });
  }

}
