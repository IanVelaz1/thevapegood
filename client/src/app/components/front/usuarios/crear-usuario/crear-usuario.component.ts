import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuarios/usuario.service';
import { Usuario } from '../../../../interfaces/usuarios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor(private httpUsuario:UsuarioService,private router:Router) { }

  objetoUsuario:Usuario={
    nombreUser:"",
    apellidoUser:"",
    emailUser:"",
    contraUser:"",
    usernameUser:"",
    generoUser:"",
    telefonoUser:"",
    direccionUser:{
      calleUser:"",
      coloniaUser:"",
      codigoPostalUser:"",
      numeroCalle:"",
      numeroInteriorCalle:"",
      ciudadUser:"",
      estadoUser:"",
      paisUser:""
    }
  }

  ngOnInit() {
  }

  nombreRequerido:boolean=false;
  emailRequerido:boolean=false;
  emailValido:boolean=false;
  contraRequerida:boolean=false;

  objUsuarioRegistrado;
  guardarUsuario(){
    if(this.objetoUsuario.nombreUser.length>=3&&this.objetoUsuario.emailUser.length>0&&this.objetoUsuario.contraUser.length>=4&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.objetoUsuario.emailUser)){
      this.httpUsuario.guardarUsuario(this.objetoUsuario).subscribe(usuario=>{
        this.objUsuarioRegistrado=usuario;
        if(this.objUsuarioRegistrado.success==true){
          this.router.navigate(['/usuario/confirmacion']);
        }
      
      });
    }if(this.objetoUsuario.nombreUser.length<3){
      this.nombreRequerido=true;
    }else {
      this.nombreRequerido=false
    }if(this.objetoUsuario.emailUser.length==0){
      this.emailRequerido=true;
    }else{
      this.emailRequerido=false;
    }if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.objetoUsuario.emailUser)){
      this.emailValido=true;
    }else{
      this.emailValido=false;
    }if(this.objetoUsuario.contraUser.length<4){
      this.contraRequerida=true;
    }else{
      this.contraRequerida=false;
    }
  }

}
