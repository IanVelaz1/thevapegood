import { Component, OnInit } from '@angular/core';
import {ColeccionesService} from '../../../../services/colecciones/colecciones.service';
import {Coleccion} from '../../../../interfaces/colecciones';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ver-coleccion',
  templateUrl: './ver-coleccion.component.html',
  styleUrls: ['./ver-coleccion.component.css']
})
export class VerColeccionComponent implements OnInit {

  constructor(private httpColecciones:ColeccionesService,private router:Router) { }

  ngOnInit() {
    this.recuperarColecciones();
  }

  objColecciones;
  arrayColecciones:Coleccion[]=[];
  recuperarColecciones(){ 
  this.httpColecciones.recuperarColecciones().subscribe(colecciones=>{
    this.objColecciones=colecciones;
    this.arrayColecciones=this.objColecciones.colecciones;
    console.log('====================================');
    console.log(this.arrayColecciones);
    console.log('====================================');
  });
  }

  verColeccion(id){
    this.router.navigate(['/admin/colecciones/'+id]);
  }

}
