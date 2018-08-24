import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AdminLoginService } from '../../../../../services/admin-login.service';
import { Router } from '@angular/router';
import { Administrador } from '../../../../../interfaces/administradores';

@Component({
  selector: 'app-agregar-administrador',
  templateUrl: './agregar-administrador.component.html',
  styleUrls: ['./agregar-administrador.component.css']
})
export class AgregarAdministradorComponent implements OnInit {

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

  constructor(private adminHttp:AdminLoginService,private router:Router,private ref:ChangeDetectorRef) { }

  puedeGuardar:boolean=false;

  ngOnInit() {
    setInterval(()=>{
      this.ref.markForCheck();
      if(this.objetoAdmin.nombre.length>0&&this.objetoAdmin.email.length>0&&this.objetoAdmin.password.length>0){
        this.puedeGuardar=true;
      }else{
        this.puedeGuardar=false;
      }
    },500);
  }

  

  guardarAdmin(){

    if(this.objetoAdmin.nombre.length>0&&this.objetoAdmin.email.length>0&&this.objetoAdmin.password.length>0){
      this.puedeGuardar=true;
      this.adminHttp.crearAdmin(this.objetoAdmin).subscribe(admin=>{
        this.router.navigate(['/admin/administradores']);
     });
    }else{
      this.puedeGuardar=false;
    }
    
   
  }

}
