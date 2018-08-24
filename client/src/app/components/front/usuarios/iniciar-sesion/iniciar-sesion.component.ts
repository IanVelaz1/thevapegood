import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../../../services/usuarios/usuario.service';
import { Usuario } from '../../../../interfaces/usuarios';
import {Router} from '@angular/router';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor(private httpUser:UsuarioService,private router:Router) { }

  objetoUsuario={
    emailUser:"",
    contraUser:""
  }

  ngOnInit() {
  }

  objAdmin;
  errorMsg:boolean=false;
  iniciarSesion(){
    this.httpUser.validarCuenta(this.objetoUsuario).subscribe(usuario=>{
      this.objAdmin=usuario;
       if(this.objAdmin.success==false){
          this.errorMsg=true;
       }else{
         this.errorMsg=false;
         this.httpUser.storeUserData(this.objAdmin.token,this.objAdmin.user);
         this.router.navigate(['/usuarios/perfil']);
       }
    })
  }





}
