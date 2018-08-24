const mongoose=require('mongoose');

const enviosSchema=new mongoose.Schema({
  nombreEnvio:String,
  pesoEnvio:Number,
  unidadPeso:String,
  metodoEnvio:String,
  precioEnvio:Number,
  tipoEnvio:String,
  diasEnvio:Number
});

const Envio=mongoose.model('envios',enviosSchema);

module.exports.guardarEnvio=(envio,callback)=>{
  Envio.create(envio,callback);
}

module.exports.recuperarEnvios=(envio,callback)=>{
  Envio.find(envio,callback);
}

module.exports.recuperarEnvioById=(id,callback)=>{
  Envio.findById(id,callback);
}

module.exports.editarEnvio=(id,envio,callback)=>{
  Envio.findByIdAndUpdate(id,envio,callback);
}

module.exports.eliminarEnvio=(id,callback)=>{
  Envio.findOneAndRemove(id,callback);
}