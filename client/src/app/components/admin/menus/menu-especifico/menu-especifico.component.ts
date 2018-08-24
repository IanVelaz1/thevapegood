import { Component, OnInit, TemplateRef,ChangeDetectorRef } from '@angular/core';
import { NavbarService } from '../../../../services/navbar-crear/navbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Navegacion } from '../../../../interfaces/navegacion';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Coleccion } from '../../../../interfaces/colecciones';
import { ColeccionesService } from '../../../../services/colecciones/colecciones.service';

@Component({
  selector: 'app-menu-especifico',
  templateUrl: './menu-especifico.component.html',
  styleUrls: ['./menu-especifico.component.css']
})
export class MenuEspecificoComponent implements OnInit {

  constructor(private modalService: BsModalService, private httpNavegacion:NavbarService,private router:Router,private route:ActivatedRoute,private ref:ChangeDetectorRef, private httpColecciones:ColeccionesService) { }

  modalRef: BsModalRef;
  idNavegacion:string="";
  ngOnInit() {
    setInterval(()=>{
      this.ref.markForCheck();
    },200);
    this.route.params.subscribe(params=>{
      this.idNavegacion=params.id;
      this.recuperarMenu();
      this.recuperarColecciones();
      this.recuperarMenus();
    });
  }

  items = [1, 2, 3, 4, 5];



  

  objetosMenu:Navegacion={
    tituloMenuPrin:"",
    coleccionPrin:"",
    enlacePrin:"",
    paginaPrin:"",
    tipoMenuPrin:"",
    esSubMenu:false,
    elementosMenu:[]
  }
 
  objRecuperadoMenu;
  recuperarMenu(){
    this.httpNavegacion.recuperarNavbarById(this.idNavegacion).subscribe(navegacion=>{
      this.objRecuperadoMenu=navegacion;
      this.objetosMenu=this.objRecuperadoMenu.navbar;
    
      if(this.objetosMenu.coleccionPrin.length>0){
        this.recuperarColeccionEspecifica(this.objetosMenu.coleccionPrin);
      }
      if(this.objetosMenu.elementosMenu.length>0){
        this.numerador=this.objetosMenu.elementosMenu.length;
      }else{
        this.numerador=0;
      }
    
    });
  }

  objColeccionMenuPrin;
  nombreColeccionPrin="";
  recuperarColeccionEspecifica(id){
     this.httpColecciones.recuperarColeccionEspecifica(id).subscribe(coleccion=>{
       this.objColeccionMenuPrin=coleccion;
       this.nombreColeccionPrin=this.objColeccionMenuPrin.coleccion.nombreCol;
     });
  }

  numerador:number=this.objetosMenu.elementosMenu.length+1;

  objMenu={
    titulo:"",
    tipo:"",
    tituloPagina:"",
    tituloColeccion:"",
    coleccion:"",
    pagina:"",
    enlace:"",
    menu:{},
    nombreMenu:"",
    numerador:this.numerador
}

cadenaColeccion=""


urlColeccion="/colecciones/";
idColeccion="";
urlPagina="";
idPagina="";


objMenuPrueba={
  titulo:"",
  tipo:"",
  url:"",
  menu:{},
    nombreMenu:"",
  numerador:this.numerador
}



  agregarElemento(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    
  }

  crearElemento(){
    this.objMenu.numerador=this.numerador;
    if(this.objMenu.tipo=='2'){
        
    }
   var copia=Object.assign({},this.objMenu);
   this.objetosMenu.elementosMenu.splice(this.numerador,0,copia);
 
   this.numerador++;
   this.objMenu={
    titulo:"",
    tipo:"",
    tituloPagina:"",
    tituloColeccion:"",
    coleccion:"",
    pagina:"",
    enlace:"",
    menu:{},
    nombreMenu:"",
    numerador:this.numerador
   }
   
  
  }

  resetObject(){
    this.objMenu={

      titulo:"",
      tipo:"",
      tituloPagina:"",
      tituloColeccion:"",
      coleccion:"",
      pagina:"",
      enlace:"",
      menu:{},
      nombreMenu:"",
      numerador:this.numerador
     }
     
  }

  editar(numerador){
    for(let i=0;i<this.objetosMenu.elementosMenu.length;i++){
      if(this.objetosMenu.elementosMenu[i].numerador==numerador){
        this.objMenu=this.objetosMenu.elementosMenu[i];
        this.nombreColeccion=this.objMenu.tituloColeccion;
        this.nombreMenu=this.objMenu.nombreMenu;
      }
    }
  }

  eliminarElemento(numerador){
    for(let i=0;i<this.objetosMenu.elementosMenu.length;i++){
      if(this.objetosMenu.elementosMenu[i].numerador==numerador){
        this.objetosMenu.elementosMenu.splice(i,1);
      }
    }
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
nombreColeccion="";
buscarColecciones(){
  this.arrayColeccionesBusqueda=[];
  this.listaColeccionesVisible=true;
  if(this.nombreColeccion.length==0){
    this.listaColeccionesVisible=false;
  }
  
   for(let i=0;i<this.arrayColecciones.length;i++){
     if(this.arrayColecciones[i].nombreCol.search(this.nombreColeccion)==0){
        var index=this.arrayColecciones.indexOf(this.arrayColecciones[i]);
 
        this.arrayColeccionesBusqueda.push(this.arrayColecciones[index]);
   
     }else if(this.arrayColecciones[i].nombreCol.search(this.nombreColeccion)!=0){
     }
     
   }

}


listaColeccionesPrinVisible=false;
buscarColeccionesPrin(){
  this.arrayColeccionesBusqueda=[];
  this.listaColeccionesPrinVisible=true;
  if(this.nombreColeccionPrin.length==0){
    this.listaColeccionesPrinVisible=false;
  }
  
   for(let i=0;i<this.arrayColecciones.length;i++){
     if(this.arrayColecciones[i].nombreCol.search(this.nombreColeccionPrin)==0){
        var index=this.arrayColecciones.indexOf(this.arrayColecciones[i]);
 
        this.arrayColeccionesBusqueda.push(this.arrayColecciones[index]);
   
     }else if(this.arrayColecciones[i].nombreCol.search(this.nombreColeccionPrin)!=0){
     }
     
   }

}

menusRecuperados;
arrayMenus:Navegacion[]=[];
recuperarMenus(){
  this.httpNavegacion.recuperarNavbar().subscribe(navbars=>{
     this.menusRecuperados=navbars;
     this.arrayMenus=this.menusRecuperados.navbar;
  });
}

listaMenusVisibles=false;
arrayMenusBusqueda=[];
nombreMenu="";
buscarMenu(){
  this.arrayMenusBusqueda=[];
  this.listaMenusVisibles=true;
  if(this.nombreMenu.length==0){
    this.listaMenusVisibles=false;
  }
  
   for(let i=0;i<this.arrayMenus.length;i++){
     if(this.arrayMenus[i].tituloMenuPrin.search(this.nombreMenu)==0){
        var index=this.arrayMenus.indexOf(this.arrayMenus[i]);
 
        this.arrayMenusBusqueda.push(this.arrayMenus[index]);
   
     }else if(this.arrayMenus[i].tituloMenuPrin.search(this.nombreMenu)!=0){
     }
     
   }
}



 editarMenu(){
   this.httpNavegacion.editarNavbar(this.idNavegacion,this.objetosMenu).subscribe(navegacion=>{
         location.reload();
   });
 }

}
