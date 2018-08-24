import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavbarService} from '../../../../../services/navbar-crear/navbar.service';
import {PaginasService} from '../../../../../services/paginas/paginas.service';
@Component({
  selector: 'app-ver-objeto-navegacion',
  templateUrl: './ver-objeto-navegacion.component.html',
  styleUrls: ['./ver-objeto-navegacion.component.css']
})
export class VerObjetoNavegacionComponent implements OnInit {

  constructor(private route:ActivatedRoute,private httpNabvar:NavbarService, private httpPaginas:PaginasService) { }
  id:string;
  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.id=params.id;
    });
    this.recuperarNavbarId(this.id);
    this.obtenerPaginas();
  }

  visibleList:boolean=false;

  objetoNavegacion={
    titulo:"",
    tipo:1,
    tituloPagina:"",
    pagina:"",
    enlace:""
  };

  objetoNavbar;

  recuperarNavbarId(id){
    this.httpNabvar.recuperarNavbarById(id).subscribe(navbar=>{
      this.objetoNavbar=navbar;
      this.objetoNavegacion=this.objetoNavbar.navbar;

    });
  }

  objetoPaginas;
  arrayPaginas:any[]=[];
  obtenerPaginas(){
    this.httpPaginas.recuperarPaginas().subscribe(paginas=>{
       console.log('====================================');
       console.log(paginas);
       console.log('====================================');
       this.objetoPaginas=paginas;
       this.arrayPaginas=this.objetoPaginas.paginas;
    });
    
  }


  editarNavbar(){
    this.httpNabvar.editarNavbar(this.id,this.objetoNavegacion).subscribe(objeto=>{
      console.log('====================================');
      console.log(objeto);
      console.log('====================================');
    })
  }




  

}
