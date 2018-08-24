import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../../../services/usuarios/usuario.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private httpUsuario:UsuarioService) { }

  ngOnInit() {
   this.recuperarUsuario();
  }

  agregarDireccion:boolean=false;
  estados:string[]=["Aguascalientes","Baja California","Baja California Sur","Campeche","Ciudad de Mexico","Coahuila","Colima","Chiapas","Chihuahua","Durango","Estado de Mexico","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];

   usuarioRec:any={};
   objUsuario:any={
     ventasUser:[],
     direccionesUser:[]
   };
   idUser:string="";
  recuperarUsuario(){
    this.usuarioRec=JSON.parse(localStorage.getItem('user_store'));
    this.idUser=this.usuarioRec.id;
    this.httpUsuario.recuperarUsuarioEspecifico(this.usuarioRec.id,this.httpUsuario.loggedIn()).subscribe(usuario=>{
      this.usuarioRec=usuario;
      this.objUsuario=this.usuarioRec.usuario;
      console.log('====================================');
      console.log(this.objUsuario);
      console.log('====================================');
    })
   
  }

  objetoDireccion:any={
    nombre:"",
    apellido:"",
    telefono:"",
    estadoUser:"",
    calleUser:"",
    numeroCalle:"",
    numeroInteriorCalle:"",
    coloniaUser:"",
    codigoPostalUser:"",
    ciudadUser:"",
    paisUser:"",
    razonSocial:"",
    rfc:""
  }

  requiredError:boolean=false;

  agregarDirecciones(){
    
    
    this.objUsuario.direccionesUser.push(this.objetoDireccion);
    if(this.objetoDireccion.nombre.length&&this.objetoDireccion.apellido.length&&this.objetoDireccion.telefono.length&&this.objetoDireccion.calleUser.length&&this.objetoDireccion.numeroCalle.length&&this.objetoDireccion.coloniaUser.length&&this.objetoDireccion.codigoPostalUser.length&&this.objetoDireccion.estadoUser.length&&this.objetoDireccion.ciudadUser.length){
      this.httpUsuario.editarUsuario(this.idUser,this.objUsuario).subscribe(usuario=>{
        location.reload();
        console.log('====================================');
        console.log(usuario);
        console.log('====================================');
      });
    }else{
      this.requiredError=true;
    }
  }

  editarDir:boolean=false;
  editarDireccion(direccion){
    this.agregarDireccion=true;
    this.objetoDireccion=direccion;
    this.editarDir=true;
  }

  guardarCambiosDireccion(){
    if(this.objetoDireccion.nombre.length&&this.objetoDireccion.apellido.length&&this.objetoDireccion.telefono.length&&this.objetoDireccion.calleUser.length&&this.objetoDireccion.numeroCalle.length&&this.objetoDireccion.coloniaUser.length&&this.objetoDireccion.codigoPostalUser.length&&this.objetoDireccion.estadoUser.length&&this.objetoDireccion.ciudadUser.length){
      this.httpUsuario.editarUsuario(this.idUser,this.objUsuario).subscribe(usuario=>{
        location.reload();
        console.log('====================================');
        console.log(usuario);
        console.log('====================================');
      });
    }else{
      this.requiredError=true;
    }
  }

  

}
