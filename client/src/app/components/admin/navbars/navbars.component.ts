import { Component, OnInit } from '@angular/core';
import {AdminLoginService} from '../../../services/admin-login.service';
@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {

  constructor(private httpAdmin:AdminLoginService) { }

  ngOnInit() {
      this.recuperarDatosUsuario();
  }
 
  objetoUsuario;
  userRecuperado:any={
      email:""
  };
  recuperarDatosUsuario(){
      this.httpAdmin.getAdmin().subscribe(admin=>{
          console.log(admin);
          this.objetoUsuario=admin;
          this.userRecuperado=this.objetoUsuario;
      })
  }

  myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-green", "");
    }
}

interfazFunc() {
    var x = document.getElementById("interfazOpt");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-green", "");
    }
}

cerrarSesion(){
    this.httpAdmin.cerrarSesion();
    location.reload();
}

 w3_open() {
    document.getElementById("sidebar").style.display = "block";
}
 w3_close() {
    document.getElementById("sidebar").style.display = "none";
}

}
