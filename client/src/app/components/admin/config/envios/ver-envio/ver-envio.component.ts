import { Component, OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Envio } from '../../../../../interfaces/envios';
import { EnviosService } from '../../../../../services/envios/envios.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-ver-envio',
  templateUrl: './ver-envio.component.html',
  styleUrls: ['./ver-envio.component.css']
})
export class VerEnvioComponent implements OnInit {

  modalRef: BsModalRef;

  objetoEnvio:Envio={
    nombreEnvio:"",
    tipoEnvio:"",
    pesoEnvio:0,
    unidadPeso:"",
    precioEnvio:0,
    diasEnvio:0,
    metodoEnvio:""
  }


  constructor(private httpEnvios:EnviosService, private ref:ChangeDetectorRef,private router:Router,private route:ActivatedRoute, private modalService:BsModalService) { }

  
  showPeso:boolean=false;
  showMonto:boolean=false;
  disabledButton:boolean=true;
  idEnvio:string="";
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
   this.route.params.subscribe(params=>{
    this.idEnvio=params.id;
    this.recuperarEnvio();
    });
  }

  objEnvio;
  recuperarEnvio(){
    this.httpEnvios.recuperarEnvioEspecifico(this.idEnvio).subscribe(envio=>{
      this.objEnvio=envio;
      this.objetoEnvio=this.objEnvio.envio;
      console.log(envio);
    });
  }

  abrirModal(template:TemplateRef<any>){
    this.modalRef=this.modalService.show(template,{class:'modal-sm'});
  }

  eliminarEnvio(){
   this.httpEnvios.eliminarEnvio(this.idEnvio).subscribe(envio=>{
       this.modalRef.hide();
       this.router.navigate(['/admin/envios']);
   });
  }

  editarTipoEnvio(){
    this.httpEnvios.editarEnvio(this.idEnvio,this.objetoEnvio).subscribe(envio=>{
      location.reload();
    });
  }


}
