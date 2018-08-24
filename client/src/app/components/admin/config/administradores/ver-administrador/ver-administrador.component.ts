import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminLoginService } from '../../../../../services/admin-login.service';
import { Administrador } from '../../../../../interfaces/administradores';

@Component({
  selector: 'app-ver-administrador',
  templateUrl: './ver-administrador.component.html',
  styleUrls: ['./ver-administrador.component.css']
})
export class VerAdministradorComponent implements OnInit {

  constructor(private route:ActivatedRoute,private httpAdmin:AdminLoginService) { }

  idCliente:string="";
  ngOnInit() {
   this.route.params.subscribe(params=>{
     this.idCliente=params.id;
     this.recuperarAdmin();
   });
  }

  puedeGuardar:boolean=false;

  objetoAdmin:Administrador={
    nombre:"",
    email:"",
    password:"",
    permisos:{
      cambiosAdmin:false,
      cambiosClientes:false,
      cambiosProductos:false,
      cambiosVentas:false
    }
  }
 
  objAdmin;
  recuperarAdmin(){
    this.httpAdmin.recuperarAdminEspecifico(this.idCliente).subscribe(admin=>{
      this.objAdmin=admin;
      this.objetoAdmin=this.objAdmin.admin;
      console.log('====================================');
      console.log(admin);
      console.log('====================================');
    });
  }

  guardarAdmin(){
    
  }

}
