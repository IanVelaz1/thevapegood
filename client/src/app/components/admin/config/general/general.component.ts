import { Component, OnInit } from '@angular/core';
import {Configuracion} from '../../../../interfaces/configuracion';
import {ConfiguracionService} from '../../../../services/configuracion/configuracion.service';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private httpConfiguracion:ConfiguracionService) { }

  ngOnInit() {
    this.recuperarConfiguracion();
  }
   
  objetoConfiguracion:Configuracion={
    nombreTienda:"",
    nombreLegal:"",
    calleTienda:"",
    ciudadTienda:"",
    cpTienda:"",
    telefonoTienda:"",
    estadoTienda:""
  }

  objConfiguracion;
  editarConfig:boolean=false;
  recuperarConfiguracion(){
    this.httpConfiguracion.recuperarConfiguracion().subscribe(configuracion=>{
      this.objConfiguracion=configuracion;
      if(this.objConfiguracion.configuracion.length>0){
       this.objetoConfiguracion=this.objConfiguracion.configuracion[0];
       this.editarConfig=true;
      }
       console.log('====================================');
       console.log(configuracion);
       console.log('====================================');
    });
  }

  guardarConfiguracion(){
    this.httpConfiguracion.guardarConfiguracion(this.objetoConfiguracion).subscribe(configuracion=>{
      console.log('====================================');
      console.log(configuracion);
      console.log('====================================');
    });
  }

  editarConfiguracion(){
    this.httpConfiguracion.editarConfiguracion(this.objetoConfiguracion._id,this.objetoConfiguracion).subscribe(configuracion=>{
        location.reload();
    });
  }
  

}
