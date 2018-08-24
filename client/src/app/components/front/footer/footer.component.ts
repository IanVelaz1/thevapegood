import { Component, OnInit, Input } from '@angular/core';
import {NavbarService} from '../../../services/navbar-crear/navbar.service';
import { Navegacion } from '../../../interfaces/navegacion';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() objetoMenuFooter:any={
    idMenu:""
  };

  constructor(private httpMenu:NavbarService) { }

  ngOnInit() {
      var interval=setInterval(()=>{
          if(this.objetoMenuFooter.idMenu.length>0){ 
            clearInterval(interval);
            this.buscarMenu(this.objetoMenuFooter.idMenu);
          }
      },300);
    }

    objetoNavbarRecuperada;
    elementosNavegacion:Navegacion[]=[];
    buscarMenu(id){
      this.httpMenu.recuperarNavbarById(id).subscribe(navbar=>{
        this.objetoNavbarRecuperada=navbar;
        this.elementosNavegacion=this.objetoNavbarRecuperada.navbar.elementosMenu;
        console.log('====================================');
        console.log(navbar);
        console.log('====================================');
      });
    }
 
  }

