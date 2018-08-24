import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {UsuarioService} from '../services/usuarios/usuario.service';

@Injectable()
export class usuarioGuard implements CanActivate {

  constructor(private http:UsuarioService,private router:Router){

  }

  canActivate(){
   if(this.http.loggedIn()){
     return true;
   }else{
     this.router.navigate(['/usuario/iniciar-sesion']);
     return false;
   }
  }
}