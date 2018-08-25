import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AdminLoginService {
  

  domain:string="http://localhost:8000";
  authToken;
  user;

  constructor(private http:HttpClient) { }

  validarCuenta(admin){
    return this.http.post(`/admin/login`,admin);
  }

  storeUserData(token,user){
    localStorage.setItem('id_token_admin',token);
    localStorage.setItem('admin',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }

  cargarToken(){
    const token=localStorage.getItem('id_token_admin');
    this.authToken=token;
  }

  loggedIn(){
    return tokenNotExpired('id_token_admin');
  }

  getAdmin(){
    this.cargarToken();
    return this.http.get(`/admin/perfil`,{headers:{'Authorization':this.authToken}});
  }

  cerrarSesion(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();

  }

  editarAdmin(admin){
    return this.http.post(`/admin/compare`,admin);
  }

  recuperarAdministradores(){
    return this.http.get(`/admin`);
  }

  recuperarAdminEspecifico(id){
    return this.http.get(`/admin/perfil/`+id);
  }

  crearAdmin(admin){
    return this.http.post(`/admin`,admin);
  }

}
