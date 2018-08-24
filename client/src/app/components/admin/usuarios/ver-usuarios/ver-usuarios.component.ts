import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioService} from '../../../../services/usuarios/usuario.service';
import {Usuario} from '../../../../interfaces/usuarios';
@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {

  constructor(private router:Router, private httpUsuario:UsuarioService) { }

  ngOnInit() {
    this.recuperarUsuarios();
  }

  agregarUsuario(){
    this.router.navigate(['/admin/usuarios/agregar']);
  }

  objetoUsuarios;
  arrayUsuarios:Usuario[]=[];
  recuperarUsuarios(){
    this.httpUsuario.recuperarUsuarios().subscribe(usuario=>{
      this.objetoUsuarios=usuario;
      this.arrayUsuarios=this.objetoUsuarios.usuarios;
    });
  
  }

  verUsuario(id){
    this.router.navigate(['/admin/usuarios/'+id]);
  }

}
