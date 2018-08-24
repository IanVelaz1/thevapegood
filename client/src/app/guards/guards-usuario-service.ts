import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {UsuarioService} from '../services/usuarios/usuario.service';

@Injectable()
export class guardUsuario implements CanActivate {
  
  constructor(private httpUsuario:UsuarioService,private router:Router){

  }

  canActivate(){
    if(this.httpUsuario.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/usuario/crear']);
      return false;
    }
  }

}