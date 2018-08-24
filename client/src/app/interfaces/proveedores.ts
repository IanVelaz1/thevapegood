export interface Proveedor{
  _id?:string;
  nombreProv:string;
  descripcionProv: string;
  telefonosProv?:string;
  productosProv:any[];
}