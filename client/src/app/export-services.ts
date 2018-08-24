/////////////////services-admin/////////////////////
import {AdminLoginService} from './services/admin-login.service';
import {guardAdmin} from './guards/guards-admin-service';
import {SubirFotosService} from './services/uploadPhotos/subir-fotos.service';
import {CrearProductoRefreshService} from './services/refresh-crear-prod/crear-producto-refresh.service';
import {NavbarService} from './services/navbar-crear/navbar.service';
import {PaginasService} from './services/paginas/paginas.service';
import {EventoService} from './services/eventos/evento.service';
import {ColeccionesService} from './services/colecciones/colecciones.service';
import {ComentariosService} from './services/comentarios/comentarios.service';
import {ProductoService} from './services/productos/producto.service';
import {PromocionService} from './services/promociones/promocion.service';
import {ProveedorService} from './services/proveedores/proveedor.service';
import {RespuestaService} from './services/respuestas/respuesta.service';
import {TagService} from './services/tags/tag.service';
import {TipoService} from './services/tipo/tipo.service';
import {UsuarioService} from './services/usuarios/usuario.service';
import {VentasService} from './services/ventas/ventas.service';
import {VisitasService} from './services/visitas/visitas.service';
import {ConfiguracionService} from './services/configuracion/configuracion.service';
import {ImpuestosService} from './services/impuestos/impuestos.service';
import {NotificacionesService} from './services/notificaciones/notificaciones.service';
import {EnviosService} from './services/envios/envios.service';
import {PoliticasService} from './services/politicas/politicas.service';
import {InterfazService} from './services/interfaz/interfaz.service';
import {CarritoService} from './services/carrito/carrito.service';
import { usuarioGuard } from './guards/guardUsuario';
/////////////////services-admin/////////////////////


export const serviceComponents=[
  AdminLoginService,
  guardAdmin,
  usuarioGuard,
  SubirFotosService,
  CrearProductoRefreshService,
  NavbarService,
  PaginasService,
  EventoService,
  ColeccionesService,
  ComentariosService,
  ProductoService,
  PromocionService,
  ProveedorService,
  RespuestaService,
  TagService,
  TipoService,
  UsuarioService,
  VentasService,
  VisitasService,
  ConfiguracionService,
  ImpuestosService,
  NotificacionesService,
  EnviosService,
  PoliticasService,
  InterfazService,
  CarritoService
  ]