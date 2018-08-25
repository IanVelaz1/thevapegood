import { Component, OnInit } from '@angular/core';
import { Administrador } from '../../../../interfaces/administradores';
import { AdminLoginService } from '../../../../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.css']
})
export class CrearAdminComponent implements OnInit {

  constructor(private httpAdmin:AdminLoginService,private router:Router) { }

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

  passwordRepeat:string="";

  ngOnInit() {
    this.recuperarUsuarios();

  }

  objAdmin;
  arrayAdministradores:Administrador[]=[];
  recuperarUsuarios(){
    this.httpAdmin.recuperarAdministradores().subscribe(admin=>{
     this.objAdmin=admin;
     this.arrayAdministradores=this.objAdmin.administradores;
      if(this.arrayAdministradores.length>0){
        this.router.navigate(['/admin/login']);
      }
    });
  }

  errorCampos:boolean=false;
  errorContra:boolean=false;

  guardarAdmin(){
   if(this.objetoAdmin.nombre.length&&this.objetoAdmin.email.length&&this.objetoAdmin.password.length){
      if(this.objetoAdmin.password==this.passwordRepeat){
        this.httpAdmin.crearAdmin(this.objetoAdmin).subscribe(admin=>{
           
        });
      }else{
        this.errorContra=true;
      }
   }else{
     this.errorCampos=true;
   }
    

  }

}
