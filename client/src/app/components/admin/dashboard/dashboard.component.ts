import { Component, OnInit } from '@angular/core';
import {Chart} from "chart.js";
import { VisitasService } from '../../../services/visitas/visitas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  grafica=[];

  constructor(private visitaHttp:VisitasService) { }

  ngOnInit() {
    this.recuperarVisitas();
    this.llenarGrafica();
  }

  objVisitas;
  arrayVisitas:any[]=[];
  arrayVisitasMensuales:any[]=[];
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
       }else if(fechaHoy.getMonth()===fecha.getMonth()){
          this.arrayVisitas.push(fecha);
          
       }
     }

   });
  }

  llenarGrafica(){
    var fecha = new Date();
    this.grafica=new Chart('canvas',{
      type:'bar',
      data:{
        labels:[fecha.getDate()],
        datasets:[{
          label:"Ventas de hoy",
          data:["15"],
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)',
            'rgba(255, 159, 64, 0.3)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    });
  }

}
