import { Component, OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import {Navegacion} from '../../../../interfaces/navegacion';
import {NavbarService} from '../../../../services/navbar-crear/navbar.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from "ngx-bootstrap/modal/bs-modal-ref.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  objetoNavbarRecuperada;
  objetosNavegacion:Navegacion[]=[];
  modalRef: BsModalRef;
  
  constructor(private ref:ChangeDetectorRef,private httpNavbar:NavbarService, private router:Router,private modalService: BsModalService) { }
  
  ngOnInit() {
    setInterval(()=>{
     this.ref.markForCheck();
    },500)
    this.recuperarObjetosNavegacion();
  }
   
  recuperarObjetosNavegacion(){
  this.httpNavbar.recuperarNavbar().subscribe(navbar=>{
     console.log('====================================');
     console.log(navbar);
     console.log('====================================');
     this.objetoNavbarRecuperada=navbar;
     this.objetosNavegacion=this.objetoNavbarRecuperada.navbar;
  });
  }

  idEliminar:string="";
  abrirModal(template:TemplateRef<any>,id){
    this.modalRef=this.modalService.show(template,{class:'confirmacion'});
    this.idEliminar=id;
  }

  eliminarElemento(){
    this.httpNavbar.eliminarNavbar(this.idEliminar).subscribe(nabvar=>{
      location.reload();
      this.modalRef.hide();
    });
  }


  
  verObjetoNavbar(id){
    this.router.navigate(['/admin/interfaz/navegacion/ver/'+id]);
  }

  eliminarObjetoNavbar(id){
    for(let i=0;i<this.objetosNavegacion.length;i++){
      if(id==this.objetosNavegacion[i]._id){
        this.objetosNavegacion.splice(i,1);
      }
    }
    
  }
  

}
