export interface Administrador {
  nombre:string,
  email:string,
  password:string,
  permisos:{
    cambiosProductos:boolean,
    cambiosVentas:boolean,
    cambiosAdmin:boolean,
    cambiosClientes:boolean,
  }
}