import { Coleccion } from "./colecciones";

export interface Producto {
  _id?:string;
  codigoProd:string;
  nombreProd:string;
  descripcionProd:string;
  imagenesProd:any[];
  addedCart:boolean;
  comentariosProd:any[];
  skuProd:string;
  invProd:boolean;
  existenciasProd:number;
  pesoProd:number;
  unidadPesoProd:string;
  permitirCompraSinInv:boolean;
  compararPrecioProd:number;
  precioVentaProd:number;
  proveedoresProd:any[];
  cantidadCarrito:number;
  tagsProd:any[];
  coleccionesProd:Coleccion[];
  tienePromocionesProd:boolean;
  promocionProd:string;
  tipoProducto?:any
  cobrarImpuestosProd:boolean;
  requiereEnvio:boolean;
}

interface coleccProd{
  _id,
  productosCol:any[]
}