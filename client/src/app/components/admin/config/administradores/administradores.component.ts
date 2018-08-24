import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../../../../services/admin-login.service';
import { Administrador } from '../../../../interfaces/administradores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  constructor(private httpAdmin:AdminLoginService,private router:Router) { }

  ngOnInit() {
  this.recuperarAdmins();
  }

  objAdmin;
  arrayAdmin:Administrador[]=[];
  recuperarAdmins(){
   this.httpAdmin.recuperarAdministradores().subscribe(admin=>{
    this.objAdmin=admin;
    this.arrayAdmin=this.objAdmin.administradores;
    console.log('====================================');
    console.log(admin);
    console.log('====================================');
   });
  }

  verAdmin(id){
    this.router.navigate(['/admin/administradores/'+id]);
  }

}
