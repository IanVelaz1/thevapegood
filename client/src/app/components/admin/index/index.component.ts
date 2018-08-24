import { Component, OnInit } from '@angular/core';
import {VisitasService} from '../../../services/visitas/visitas.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private visitaHttp:VisitasService) { }

  ngOnInit() {
    this.recuperarVisitas();
  }

  objVisitas;
  arrayVisitas:any[]=[];
  arrayAdminV:any[]=[];
  recuperarVisitas(){
    let fechaHoy=new Date();
    
   this.visitaHttp.recuperarVisitas().subscribe(visitas=>{
     this.objVisitas=visitas;  
     this.arrayVisitas=this.objVisitas.visitas;
     for(let i=0;i<this.arrayVisitas.length;i++){
       let fecha=new Date(this.arrayVisitas[i].fechaVisita);
       if(fechaHoy.getFullYear()===fecha.getFullYear() && fechaHoy.getDate()===fecha.getDate()&&fechaHoy.getMonth()===fecha.getMonth()){
         this.arrayAdminV.push(fecha);
         console.log('====================================');
         console.log(this.arrayAdminV);
         console.log('====================================');
       }
     }

   });
  }

}
