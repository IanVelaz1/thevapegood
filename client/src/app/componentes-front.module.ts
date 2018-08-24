import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core"; 
import {NavFrontComponent} from './components/front/nav-front/nav-front.component';
import {SeccionesCarouselComponent} from './components/front/index-front/secciones-carousel/secciones-carousel.component';
/////componentes-front/////
import {IndexFrontComponent} from './components/front/index-front/index-front.component';
import {SeccionesSideComponent} from './components/front/index-front/secciones-side/secciones-side.component';
import {SeccionesDerechaComponent} from './components/front/index-front/secciones-derecha/secciones-derecha.component';
import {FooterComponent} from './components/front/footer/footer.component';
import {ColeccionesComponent} from './components/front/colecciones/colecciones.component';
import {CrearUsuarioComponent} from './components/front/usuarios/crear-usuario/crear-usuario.component';
import {ConfirmacionUsuarioComponent} from './components/front/usuarios/confirmacion-usuario/confirmacion-usuario.component';
import {ProductoEspecificoComponent} from './components/front/producto-especifico/producto-especifico.component';
import {IniciarSesionComponent} from './components/front/usuarios/iniciar-sesion/iniciar-sesion.component';

import {CarritoComponent} from './components/front/carrito/carrito.component';
import {reditectCarrito} from './components/front/carrito/redirectCarrito';
import {redirectCarritoCol} from './components/front/colecciones/redirectCarrito'

import {PerfilComponent} from './components/front/usuarios/perfil/perfil.component';

////guard usuario////
import {usuarioGuard} from './guards/guardUsuario'
////guard usuario////

/////componentes-front/////
export const routesFrontComponents=[
 IndexFrontComponent,
 NavFrontComponent,
 SeccionesCarouselComponent,
 SeccionesSideComponent,
 SeccionesDerechaComponent,
 FooterComponent,
 ColeccionesComponent,
 CrearUsuarioComponent,
 ConfirmacionUsuarioComponent,
 ProductoEspecificoComponent,
 IniciarSesionComponent,
 CarritoComponent,
 reditectCarrito,
 PerfilComponent,
 redirectCarritoCol
];

const appRoutesFront:Routes=[
   {path:'',component:IndexFrontComponent},
   {path:'colecciones/:id',component:ColeccionesComponent},
   {path:'usuario/crear',component:CrearUsuarioComponent},
   {path:'usuario/confirmacion',component:ConfirmacionUsuarioComponent},
   {path:'usuario/iniciar-sesion',component:IniciarSesionComponent},
   {path:'usuarios/perfil',component:PerfilComponent,canActivate:[usuarioGuard]},
   {path:'colecciones/producto/:idProducto',component:ProductoEspecificoComponent},
   {path:'carrito',component:CarritoComponent},
   {path:'redirect/carrito',component:reditectCarrito},
   {path:'redirect/coleccion/:id',component:redirectCarritoCol}
   
];

export const RoutingFront:ModuleWithProviders=RouterModule.forRoot(appRoutesFront);