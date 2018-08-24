import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../../../../services/usuarios/usuario.service';
import { Usuario } from '../../../../interfaces/usuarios';
@Component({
  selector: 'app-usuario-especifico',
  templateUrl: './usuario-especifico.component.html',
  styleUrls: ['./usuario-especifico.component.css']
})
export class UsuarioEspecificoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private httpUsuario:UsuarioService) { }

  requiredField:boolean=true;

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

  idCliente:string="";
  ngOnInit() {
    this.route.params.subscribe(params=>{
       this.idCliente=params.id;
       this.recuperarUsuario(this.idCliente);
    });
  }

  objUsuario;
  recuperarUsuario(id){
   this.httpUsuario.recuperarUsuarioEspecifico(id,this.httpUsuario.loggedIn()).subscribe(usuario=>{
     this.objUsuario=usuario;
     this.objetoUsuario=this.objUsuario.usuario;
    console.log('====================================');
    console.log(usuario);
    console.log('====================================');
   });
  }

  editarUsuario(){
    this.httpUsuario.editarUsuario(this.idCliente,this.objetoUsuario).subscribe(usuario=>{
       console.log('====================================');
       console.log(usuario);
       console.log('====================================');
       location.reload();
    });

  }

}
