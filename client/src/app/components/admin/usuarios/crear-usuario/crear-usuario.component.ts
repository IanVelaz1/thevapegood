import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../../../interfaces/usuarios';
import {UsuarioService} from '../../../../services/usuarios/usuario.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {

  objetoUsuario:Usuario={
    nombreUser:'',
    apellidoUser:'',
    emailUser:'',
    contraUser:'',
    usernameUser:'',
    generoUser:'',
    telefonoUser:'',
    direccionUser:{
      calleUser:'',
      ciudadUser:'',
      codigoPostalUser:'',
      coloniaUser:'',
      estadoUser:'',
      numeroCalle:'',
      numeroInteriorCalle:'',
      paisUser:''
    }
  }

  constructor(private httpUsuario:UsuarioService,private router:Router) { }
  requiredField:boolean=false;
  ngOnInit() {
  
  }

 

  guardarUsuario(){
     if(this.objetoUsuario.nombreUser.length>0 && this.objetoUsuario.apellidoUser.length>0){
     this.requiredField=false;
     this.httpUsuario.guardarUsuario(this.objetoUsuario).subscribe(usuario=>{
      this.router.navigate(['/admin/usuarios']);
     });
     }else{
this.requiredField=true; 
     }
  }



}
