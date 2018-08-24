import { Component, OnInit } from '@angular/core';
import {AdminLoginService} from "../../../services/admin-login.service";
import {Router} from '@angular/router';
import { Administrador } from '../../../interfaces/administradores';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   admin:Administrador={
     nombre:"",
     email:"",
     password:"",
     permisos:{
       cambiosAdmin:false,
       cambiosClientes:false,
       cambiosProductos:false,
       cambiosVentas:false
     }
   };

   objetoAdmin;

   success:boolean;

  constructor(private adminLogin:AdminLoginService,private router:Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    this.adminLogin.validarCuenta(this.admin).subscribe(admin=>{
       this.objetoAdmin=admin;
      
       if(this.objetoAdmin.success==false){
         this.success==false;
       }else if(this.objetoAdmin.success==true){
         this.adminLogin.storeUserData(this.objetoAdmin.token,this.objetoAdmin.admin);
         this.router.navigate(['/admin/inicio']);
         this.success=true;
       }
    });
  }

}
