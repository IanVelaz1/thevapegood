import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {Envio} from '../../../../../interfaces/envios';
import {EnviosService} from '../../../../../services/envios/envios.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-agregar-envio',
  templateUrl: './agregar-envio.component.html',
  styleUrls: ['./agregar-envio.component.css']
})
export class AgregarEnvioComponent implements OnInit {

  constructor(private httpEnvios:EnviosService, private ref:ChangeDetectorRef,private router:Router) { }

  objetoEnvio:Envio={
    nombreEnvio:"",
    tipoEnvio:"",
    pesoEnvio:0,
    unidadPeso:"",
    precioEnvio:0,
    diasEnvio:0,
    metodoEnvio:""
  }

  showPeso:boolean=false;
  showMonto:boolean=false;
  disabledButton:boolean=true;
  ngOnInit() {
    setInterval(()=>{
      this.ref.markForCheck();
      if(this.objetoEnvio.tipoEnvio=="peso"){
      this.showPeso=true;
      }else{
        this.showPeso=false;
      } 
      if(this.objetoEnvio.tipoEnvio=="monto"){
        this.showMonto=true;
      }else{
        this.showMonto=false;
      }
      if(this.objetoEnvio.nombreEnvio.length>0){
        this.disabledButton=false;
      }else{
        this.disabledButton=true; 
      }
    },200);
  }

  guardarTipoEnvio(){
    this.httpEnvios.guardarEnvio(this.objetoEnvio).subscribe(envio=>{
      this.router.navigate(['/admin/envios']);
    });
  }

}
