import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../../services/productos/producto.service';
import {Producto} from '../../../../interfaces/producto';
import {Router} from '@angular/router';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  constructor(private httpService:ProductoService,private router:Router) { }

  ngOnInit() {
    this.recuperarProductos();
  }

  productosRecuperados;
  arrayProductos:Producto[]=[];
  recuperarProductos(){
    this.httpService.recuperarProductos().subscribe(productos=>{
      this.productosRecuperados=productos;
      this.arrayProductos=this.productosRecuperados.productos;
      console.log('====================================');
      console.log(this.arrayProductos);
      console.log('====================================');
    })
  }

  verProducto(id){
    this.router.navigate(['/admin/productos/'+id]);
  }

}
