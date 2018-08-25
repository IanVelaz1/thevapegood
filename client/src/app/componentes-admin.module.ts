import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core"; 


///////////////////admin-components//////////////////
import {IndexComponent} from './components/admin/index/index.component';
import {NavbarsComponent} from './components/admin/navbars/navbars.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {AgregarProductoComponent} from './components/admin/productos/agregar-producto/agregar-producto.component';
import {ListaProductosComponent} from './components/admin/productos/lista-productos/lista-productos.component';
import {VerProductoComponent} from './components/admin/productos/ver-producto/ver-producto.component';
import {AgregarColeccionComponent} from './components/admin/colecciones/agregar-coleccion/agregar-coleccion.component';
import {VerColeccionComponent} from './components/admin/colecciones/ver-coleccion/ver-coleccion.component';
import {ColeccionEspecificaComponent} from './components/admin/colecciones/coleccion-especifica/coleccion-especifica.component';
import {VerUsuariosComponent} from './components/admin/usuarios/ver-usuarios/ver-usuarios.component';
import {CrearUsuarioComponent} from './components/admin/usuarios/crear-usuario/crear-usuario.component';
import {LoginComponent} from './components/admin/login/login.component';
import {RefreshCreateProduct} from './components/admin/productos/agregar-producto/refresh-create-product';
import {NavegacionComponent} from './components/admin/menus/navegacion/navegacion.component';
import {AgregarElementoComponent} from './components/admin/menus/navegacion/agregar-elemento/agregar-elemento.component';
import {VerObjetoNavegacionComponent} from './components/admin/menus/navegacion/ver-objeto-navegacion/ver-objeto-navegacion.component';
import {PaginasComponent} from './components/admin/paginas/paginas.component';
import {AgregarPaginaComponent} from './components/admin/paginas/agregar-pagina/agregar-pagina.component';
import {VerPaginaComponent} from './components/admin/paginas/ver-pagina/ver-pagina.component';
import {ConfigComponent} from './components/admin/config/config.component';
import {EventosComponent} from './components/admin/eventos/eventos.component';
import {EventoEspecificoAdminComponent} from './components/admin/evento-especifico/evento-especifico.component';
import {AgregarEventoComponent} from './components/admin/eventos/agregar-evento/agregar-evento.component';
import {UsuarioEspecificoComponent} from './components/admin/usuarios/usuario-especifico/usuario-especifico.component';
import {CrearDescuentoComponent} from './components/admin/descuentos/crear-descuento/crear-descuento.component';
import {VerDescuentosComponent} from './components/admin/descuentos/ver-descuentos/ver-descuentos.component';
import {DescuentoEspecificoComponent} from './components/admin/descuentos/descuento-especifico/descuento-especifico.component';
import {GeneralComponent} from './components/admin/config/general/general.component';
import {ImpuestosComponent} from './components/admin/config/impuestos/impuestos.component';
import {NotificacionesComponent} from './components/admin/config/notificaciones/notificaciones.component';
import {EnviosComponent} from './components/admin/config/envios/envios.component';
import {AgregarEnvioComponent} from './components/admin/config/envios/agregar-envio/agregar-envio.component';
import {VerEnvioComponent} from './components/admin/config/envios/ver-envio/ver-envio.component';
import {AdministradoresComponent} from './components/admin/config/administradores/administradores.component';
import {AgregarAdministradorComponent} from './components/admin/config/administradores/agregar-administrador/agregar-administrador.component';
import {VerAdministradorComponent} from './components/admin/config/administradores/ver-administrador/ver-administrador.component';
import {PoliticasComponent} from './components/admin/config/politicas/politicas.component';
import {NavbarComponent} from './components/admin/tema/navbar/navbar.component';
import {TemaComponent} from './components/admin/tema/tema/tema.component';
import {VerMenusComponent} from './components/admin/menus/ver-menus/ver-menus.component';
import {AgregarMenuComponent} from './components/admin/menus/agregar-menu/agregar-menu.component';
import {MenuEspecificoComponent} from './components/admin/menus/menu-especifico/menu-especifico.component';
import {InterfazComponent} from './components/admin/tema/interfaz/interfaz.component';
import {redirectProducto} from './components/admin/productos/ver-producto/redirectColeccion';
import {CrearAdminComponent} from './components/admin/login/crear-admin/crear-admin.component';
///////////////////admin-components//////////////////



////////////////components-front///////////////////

////////////////components-front///////////////////


export const routesComponents=[
 IndexComponent,
 NavbarsComponent,
 DashboardComponent,
 AgregarProductoComponent,
 ListaProductosComponent,
 LoginComponent,
 RefreshCreateProduct,
 NavegacionComponent,
 AgregarElementoComponent,
 VerObjetoNavegacionComponent,
 PaginasComponent,
 AgregarPaginaComponent,
 VerPaginaComponent,
 ConfigComponent,
 EventosComponent,
 EventoEspecificoAdminComponent,
 AgregarEventoComponent,
 VerProductoComponent,
 AgregarColeccionComponent,
 VerColeccionComponent,
 ColeccionEspecificaComponent,
 CrearUsuarioComponent,
 VerUsuariosComponent,
 UsuarioEspecificoComponent,
 CrearDescuentoComponent,
 VerDescuentosComponent,
 DescuentoEspecificoComponent,
 GeneralComponent,
 ImpuestosComponent,
 NotificacionesComponent,
 EnviosComponent,
 AgregarEnvioComponent,
 VerEnvioComponent,
 AdministradoresComponent,
 AgregarAdministradorComponent,
 VerAdministradorComponent,
 PoliticasComponent,
 NavbarComponent,
 TemaComponent,
 VerMenusComponent,
 AgregarMenuComponent,
 MenuEspecificoComponent,
 InterfazComponent,
 redirectProducto,
 CrearAdminComponent
];

//////guard-admin/////////////
import {guardAdmin} from './guards/guards-admin-service';
//////guard-admin/////////////
const appRoutes:Routes=[
  /////////////rutas-admin/////////////


 {path:'admin/login',component:LoginComponent},
 {path:'admin/inicio',component:IndexComponent,canActivate:[guardAdmin]},
 {path:'admin/productos/agregar',component:AgregarProductoComponent,canActivate:[guardAdmin]},
 {path:'admin/productos',component:ListaProductosComponent,canActivate:[guardAdmin]},
 {path:'admin/productos/:id',component:VerProductoComponent,canActivate:[guardAdmin]},
 {path:'admin/productos/redirect/:id',component:redirectProducto,canActivate:[guardAdmin]},
 {path:'admin/colecciones',component:VerColeccionComponent,canActivate:[guardAdmin]},
 {path:'admin/colecciones/agregar',component:AgregarColeccionComponent,canActivate:[guardAdmin]},
 {path:'admin/colecciones/:id',component:ColeccionEspecificaComponent},
 {path:'admin/usuarios',component:VerUsuariosComponent,canActivate:[guardAdmin]},
 {path:'admin/usuarios/agregar',component:CrearUsuarioComponent,canActivate:[guardAdmin]},
 {path:'admin/usuarios/:id',component:UsuarioEspecificoComponent,canActivate:[guardAdmin]},
 {path:'admin/interfaz/navegacion',component:VerMenusComponent,canActivate:[guardAdmin]},
 {path:'admin/interfaz/navegacion/agregar',component:AgregarMenuComponent,canActivate:[guardAdmin]},
 {path:'admin/interfaz/navegacion/:id',component:MenuEspecificoComponent,canActivate:[guardAdmin]},
 {path:'admin/paginas',component:PaginasComponent,canActivate:[guardAdmin]},
 {path:'admin/paginas/agregar',component:AgregarPaginaComponent,canActivate:[guardAdmin]},
 {path:'admin/paginas/ver/:id',component:VerPaginaComponent,canActivate:[guardAdmin]},
 {path:'admin/config',component:ConfigComponent,canActivate:[guardAdmin]},
 {path:'admin/config/general',component:GeneralComponent,canActivate:[guardAdmin]},
 {path:'admin/config/impuestos',component:ImpuestosComponent,canActivate:[guardAdmin]},
 {path:'admin/eventos',component:EventosComponent,canActivate:[guardAdmin]},
 {path:'admin/evento/:id',component:EventoEspecificoAdminComponent,canActivate:[guardAdmin]},
 {path:'admin/eventos/agregar',component:AgregarEventoComponent,canActivate:[guardAdmin]},
 {path:'admin/descuentos',component:VerDescuentosComponent,canActivate:[guardAdmin]},
 {path:'admin/descuentos/agregar',component:CrearDescuentoComponent,canActivate:[guardAdmin]},
 {path:'admin/descuentos/:id',component:DescuentoEspecificoComponent,canActivate:[guardAdmin]},
 {path:'admin/notificaciones',component:NotificacionesComponent,canActivate:[guardAdmin]},
 {path:'admin/envios',component:EnviosComponent,canActivate:[guardAdmin]},
 {path:'admin/envios/agregar',component:AgregarEnvioComponent,canActivate:[guardAdmin]},
 {path:'admin/envios/:id',component:VerEnvioComponent,canActivate:[guardAdmin]},
 {path:'admin/administradores',component:AdministradoresComponent,canActivate:[guardAdmin]},
 {path:'admin/administradores/agregar',component:AgregarAdministradorComponent,canActivate:[guardAdmin]},
 {path:'admin/administradores/:id',component:VerAdministradorComponent,canActivate:[guardAdmin]},
 {path:'admin/politicas',component:PoliticasComponent,canActivate:[guardAdmin]},
 {path:'admin/tema',component:TemaComponent,canActivate:[guardAdmin]},
 {path:'admin/tema/index',component:InterfazComponent,canActivate:[guardAdmin]},
 {path:'admin/crear-admin',component:CrearAdminComponent}
 
 /////////////rutas-admin/////////////
];

export const Routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
