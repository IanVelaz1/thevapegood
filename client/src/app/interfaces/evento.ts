export interface Evento {
  _id?:string;
  titulo:string;
  precio?:number;
  descripcion:string;
  imagenes:any[];
  fechaReservacion?:Date;
  fechaCompra?:Date;
  nombreComprador?:string;
  direccion?:string;
  telefono?:string;
  email?:string;
  comentarios?:string;

}