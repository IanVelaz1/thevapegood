import { Component, OnInit } from '@angular/core';
import { PoliticasService } from '../../../../services/politicas/politicas.service';
import { Politicas } from '../../../../interfaces/politicas';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})
export class PoliticasComponent implements OnInit {

  constructor(private httpPoliticas:PoliticasService) { }
  
  objetoPoliticas:Politicas={
    politicaPrivacidad:"",
    politicaReembolso:"",
    terminosCondiciones:""
  }

  objPolitica;
  isEditable:boolean=false;
  ngOnInit() {
    this.recuperarPoliticas();
  }

  recuperarPoliticas(){
    this.httpPoliticas.recuperarPoliticas().subscribe(politicas=>{
      this.objPolitica=politicas;
      if(this.objPolitica.politica.length>0){
        this.objetoPoliticas=this.objPolitica.politica[0];
        this.isEditable=true;
      }
    });
  }

  guardarPoliticas(){
    this.httpPoliticas.guardarPolitica(this.objetoPoliticas).subscribe(politicas=>{
       location.reload();
    });
  }

  editarPoliticas(){
    this.httpPoliticas.editarPoliticas(this.objetoPoliticas._id,this.objetoPoliticas).subscribe(politicas=>{
      location.reload();
    })
  }

}
