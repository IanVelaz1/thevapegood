import { Component, OnInit } from '@angular/core';
import {EventoService} from '../../../services/eventos/evento.service';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private eventoService:EventoService) { }

  ngOnInit() {
    this.recuperarEventos();
  }

  objetoEvento;
  arrayEventos:any[]=[];
  recuperarEventos(){
    this.eventoService.recuperarEventos().subscribe(eventos=>{
      console.log('====================================');
      console.log(eventos);
      console.log('====================================');
      this.objetoEvento=eventos;
      this.arrayEventos=this.objetoEvento.eventos;
    });
  }



}
