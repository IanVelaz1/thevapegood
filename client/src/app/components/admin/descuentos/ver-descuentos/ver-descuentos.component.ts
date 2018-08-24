import { Component, OnInit } from '@angular/core';
import {PromocionService} from '../../../../services/promociones/promocion.service';
import {Promocion} from '../../../../interfaces/promociones';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ver-descuentos',
  templateUrl: './ver-descuentos.component.html',
  styleUrls: ['./ver-descuentos.component.css']
})
export class VerDescuentosComponent implements OnInit {

  constructor(private httpPromocion:PromocionService,private router:Router) { }

  ngOnInit() {
    this.recuperarPromociones();
  }

  objPromociones;
  arrayPromociones:Promocion[]=[];
  recuperarPromociones(){
    this.httpPromocion.recuperarPromociones().subscribe(promocion=>{
      this.objPromociones=promocion;
      this.arrayPromociones=this.objPromociones.promociones;
    });
  }

  verPromocion(id){
    this.router.navigate(['/admin/descuentos/'+id]);
  }

}
