export interface Promocion {
  _id?:string,
  nombreProm:string,
  descripcionProm:string,
  productosProm:any[],
  precioProm:number,
  usosLimiteProm?:number,
  fechasProm?:any[]
}