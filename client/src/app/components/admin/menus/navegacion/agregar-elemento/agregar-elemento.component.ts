import { Component, OnInit } from '@angular/core';
import { Navegacion } from '../../../../../interfaces/navegacion';
import {NavbarService} from '../../../../../services/navbar-crear/navbar.service';
@Component({
  selector: 'app-agregar-elemento',
  templateUrl: './agregar-elemento.component.html',
  styleUrls: ['./agregar-elemento.component.css']
})
export class AgregarElementoComponent implements OnInit {

  constructor(private httpNavbar:NavbarService) { }
   
  objetoNavegacion={
    titulo:"",
    tipo:1,
    pagina:"",
    enlace:""
  };

  ngOnInit() {
  }

  guardarNavbar(){
    this.httpNavbar.guardarNavbar(this.objetoNavegacion).subscribe(navbar=>{
      console.log('====================================');
      console.log(navbar);
      console.log('====================================');
    });
  }

  

}
