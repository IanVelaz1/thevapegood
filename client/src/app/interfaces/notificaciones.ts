export interface Notificacion{
  _id?:string,
  confirmacionOrden:{
    asunto:string,
    mensaje:string
  },
  ordenCancelada:{
   asunto:string,
   mensaje:string
 },
  reembolsoOrden:{
   asunto:string,
   mensaje:string
 },
  confirmacionEnvio:{
   asunto:string,
   mensaje:string
 },
  pedidoEnviado:{
   asunto:string,
   mensaje:string
 },
  pedidoEntregado:{
   asunto:string,
   mensaje:string
 },
  confirmacionCliente:{
   asunto:string,
   mensaje:string
 },
  cambioPassword:{
   asunto:string,
   mensaje:string
 },
  confirmacionOrdenAdmin:{
   asunto:string,
   mensaje:string
 }
}