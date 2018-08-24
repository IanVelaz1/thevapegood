import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class UsuarioService {

  constructor(private http:HttpClient) { }
  domain:string='http://localhost:8000';
  authToken;
  user;

  guardarUsuario(usuario){
    return this.http.post(`/usuario`,usuario);
  }

  validarCuenta(usuario){
    return this.http.post(`/usuario/login`,usuario);
  }

  storeUserData(token,user){
    localStorage.setItem('id_token_user',token);
    localStorage.setItem('user_store',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }

  cargarToken(){
    let token=localStorage.getItem('id_token_user');
    this.authToken=token;
  }

  loggedIn(){
    return tokenNotExpired('id_token_user');

  }

  getUsuario(){
    this.cargarToken();
    return this.http.get(`/usuario/perfil`,{headers:{'Authorization':this.authToken}});
  }

  recuperarUsuarios(){
    return this.http.get(`/usuarios`);
  }

  cerrarSesion(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();

  }

  recuperarUsuarioEspecifico(id,logged){
    let obj={
      logged:logged
    }
   return this.http.post(`/usuario/`+id,obj);
  }

  editarUsuario(id,usuario){
    return this.http.put(`/usuario/`+id,usuario);
  }




}
