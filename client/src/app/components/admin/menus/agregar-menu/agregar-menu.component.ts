import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Navegacion } from '../../../../interfaces/navegacion';
import { NavbarService } from '../../../../services/navbar-crear/navbar.service';
import { Router } from '@angular/router';
import { Coleccion } from '../../../../interfaces/colecciones';
import { ColeccionesService } from '../../../../services/colecciones/colecciones.service';
@Component({
  selector: 'app-agregar-menu',
  templateUrl: './agregar-menu.component.html',
  styleUrls: ['./agregar-menu.component.css']
})
export class AgregarMenuComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private httpNavbar:NavbarService,private router:Router,private httpColecciones:ColeccionesService) { }

  items = [1, 2, 3, 4, 5];

  ngOnInit() {
    this.recuperarColecciones();
  }

  objMenu={
      titulo:"",
      tipo:"",
      tituloPagina:"",
      tituloColeccion:"",
      coleccion:"",
      pagina:"",
      enlace:""
  }

  objetosMenu:Navegacion={
    tituloMenuPrin:"",
    coleccionPrin:"",
    enlacePrin:"",
    paginaPrin:"",
    tipoMenuPrin:"",
    esSubMenu:false,
    elementosMenu:[]
  }

  agregarElemento(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  coleccionesRecuperadas;
  arrayColecciones:Coleccion[]=[];
  recuperarColecciones(){
  this.httpColecciones.recuperarColecciones().subscribe(colecciones=>{
    this.coleccionesRecuperadas=colecciones;
    this.arrayColecciones=this.coleccionesRecuperadas.colecciones;
  });
  }

listaColeccionesVisible=false;
btnAgregarColeccionVisible=false;
arrayColeccionesBusqueda=[]
arrayColeccionesSeleccionadas:any[]=[];
nombreColeccionPrin="";
buscarColeccionesPrin(){
  this.arrayColeccionesBusqueda=[];
  this.listaColeccionesVisible=true;
  if(this.nombreColeccionPrin.length==0){
    this.listaColeccionesVisible=false;
  }
  
   for(let i=0;i<this.arrayColecciones.length;i++){
     if(this.arrayColecciones[i].nombreCol.search(this.nombreColeccionPrin)==0){
        var index=this.arrayColecciones.indexOf(this.arrayColecciones[i]);
 
        this.arrayColeccionesBusqueda.push(this.arrayColecciones[index]);
   
     }else if(this.arrayColecciones[i].nombreCol.search(this.nombreColeccionPrin)!=0){
     }
     
   }

}

  objNavGuardada;
  guardarMenu(){
    
    this.httpNavbar.guardarNavbar(this.objetosMenu).subscribe(navbar=>{
      this.objNavGuardada=navbar;
      this.router.navigate(['/admin/interfaz/navegacion/'+this.objNavGuardada.navbar._id])
    });
  }

}
