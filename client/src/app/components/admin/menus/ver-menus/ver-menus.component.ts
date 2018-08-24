import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../../services/navbar-crear/navbar.service';
import { Navegacion } from '../../../../interfaces/navegacion';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-ver-menus',
  templateUrl: './ver-menus.component.html',
  styleUrls: ['./ver-menus.component.css']
})
export class VerMenusComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private httpNavegacion:NavbarService,private router:Router,private modalService: BsModalService) { }

  ngOnInit() {
    this.recuperarNavbars();
  }

  objMenus;
  objetosNavegacion:Navegacion[]=[];
  recuperarNavbars(){
    this.httpNavegacion.recuperarNavbar().subscribe(navbars=>{
      this.objMenus=navbars;
      this.objetosNavegacion=this.objMenus.navbar;
        console.log('====================================');
        console.log(navbars);
        console.log('====================================');
    });
  }

  idEliminar:string="";
  abrirModal(template,id){
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.idEliminar=id;
  }

  eliminarNav(){
    this.httpNavegacion.eliminarNavbar(this.idEliminar).subscribe(navbar=>{
       this.modalRef.hide();
       location.reload();
    });
  }

  cancelarNav(){
    this.modalRef.hide();
    this.idEliminar="";
  }

  verObjetoNavbar(id){
   this.router.navigate(['/admin/interfaz/navegacion/'+id]);
  }

}
