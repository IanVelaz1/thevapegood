import { Component, OnInit } from '@angular/core';
import { EnviosService } from '../../../../services/envios/envios.service';
import { Envio } from '../../../../interfaces/envios';
import { Router } from '@angular/router';


@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  constructor(private httpEnvios:EnviosService, private router:Router) { }

  ngOnInit() {
    this.recuperarEnvios();
  }

  arrayEnvios:Envio[]=[];

  navegarEnvio(id){
    this.router.navigate(['/admin/envios/'+id]);
  }

  objEnvios;
  recuperarEnvios(){
    this.httpEnvios.recuperarEnvios().subscribe(envios=>{
      this.objEnvios=envios;
      this.arrayEnvios=this.objEnvios.envios;
      console.log('====================================');
      console.log(envios);
      console.log('====================================');
    });
  }

}
