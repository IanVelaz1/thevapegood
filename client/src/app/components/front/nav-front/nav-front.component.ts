import { Component, OnInit, Input } from '@angular/core';
import { NavbarService } from '../../../services/navbar-crear/navbar.service';
import {Navegacion} from '../../../interfaces/navegacion';
import {InterfazService} from '../../../services/interfaz/interfaz.service';
import {ScrollEvent} from 'ngx-scroll-event';
import {Router} from '@angular/router';
import {CarritoService} from '../../../services/carrito/carrito.service';
import { Producto } from '../../../interfaces/producto';
import { ProductoService } from '../../../services/productos/producto.service';
import { UsuarioService } from '../../../services/usuarios/usuario.service';
@Component({
  selector: 'app-nav-front',
  templateUrl: './nav-front.component.html',
  styleUrls: ['./nav-front.component.css']
})
export class NavFrontComponent implements OnInit {

  constructor(private httpMenu:NavbarService,private httpInterfaz:InterfazService, private router:Router,private httpCarrito:CarritoService,private httpProducto:ProductoService,private httpUser:UsuarioService) { }

  ctaVisible:boolean=false;
  userLoggedIn:boolean=false;
  interval;
  ngOnInit() {
    this.recuperarMenuInterfaz();
      this.recuperarCarrito();
    this.userLoggedIn=this.httpUser.loggedIn();
  }

  variable=3;
  color="blue";
  objetoMenu;
  recuperarMenuInterfaz(){
    this.httpInterfaz.recuperarNavbar().subscribe(menu=>{
      this.objetoMenu=menu;
      let idMenu=this.objetoMenu.navbar[0].objetoMenuSuperior.idMenuSuperior;
      if(idMenu){
        this.recuperarMenuEspecifico(idMenu);
      }
       console.log('====================================');
       console.log(idMenu);
       console.log('====================================');
    });
  }

  elementosNavMega:Navegacion[]=[];
  elementosNav:Navegacion[]=[];
  objNavbar;
  recuperarMenuEspecifico(id){
    this.httpMenu.recuperarNavbarById(id).subscribe(navbar=>{
      this.objNavbar=navbar;
      console.log('====================================');
      console.log(this.objNavbar);
      console.log('====================================');
      for(let i=0;i<this.objNavbar.navbar.elementosMenu.length;i++){
        if(this.objNavbar.navbar.elementosMenu[i].tipo==4){
           this.elementosNavMega.push(this.objNavbar.navbar.elementosMenu[i]);
        }else{
          this.elementosNav.push(this.objNavbar.navbar.elementosMenu[i]);
        }

      }
      clearInterval(this.interval);
    });
  }

  dropdownUser(evento){
  
   this.ctaVisible=true;
  }
  
  hoverCarrito:boolean=false;

  objCarrito;
  arrayProductosCarrito:Producto[]=[];
  objProducto;
  
  cantidadCarrito:number=0;
  recuperarCarrito(){
    if(this.httpCarrito.carritoExiste()==true){
      
      this.objCarrito=JSON.parse(this.httpCarrito.recuperarProductosCarrito());
      for(let i=0;i<this.objCarrito.carrito.length;i++){

        this.cantidadCarrito+=this.objCarrito.carrito[i].cantidadCarrito;
          this.arrayProductosCarrito.push(this.objCarrito.carrito[i]);
          if(i==this.objCarrito.carrito.length-1){
            this.obtenerTotalCarrito();
          }
      }
      
    }
  }

  totalCarrito:number=0;
  obtenerTotalCarrito(){
     for(let i=0;i<this.arrayProductosCarrito.length;i++){
       this.totalCarrito=this.totalCarrito+this.arrayProductosCarrito[i].precioVentaProd*this.arrayProductosCarrito[i].cantidadCarrito;
     }
  }

  abrirCarrito(){
    this.router.navigate(['/carrito'])
  }

  cerrarSesion(){
    this.httpUser.cerrarSesion();
  }

  






}
