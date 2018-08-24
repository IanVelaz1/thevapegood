import { Component, OnInit } from '@angular/core';
import {PaginasService} from '../../../services/paginas/paginas.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {

  constructor(private httpPaginas:PaginasService,private router:Router) { }

  ngOnInit() {
    this.obtnerPaginas();
  }

  objetoPaginas;
  arrayPaginas:any []=[{pagina:{titulo:""}}];
  obtnerPaginas(){
    this.httpPaginas.recuperarPaginas().subscribe(paginas=>{
      this.objetoPaginas=paginas;
      this.arrayPaginas=this.objetoPaginas.paginas;
      console.log('====================================');
      console.log(paginas);
      console.log('====================================');
    });
  }

  

}
