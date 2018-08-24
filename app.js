const express=require('express'),
app=express(),
bodyParser=require('body-parser'),
cors=require('cors'),
morgan=require('morgan'),
mongoose=require('mongoose'),
passport=require('passport'),
path=require('path');
config=require('./config/config'),
multer=require('multer'),
uploadPhotos=multer({dest:'productos/'}),
cloudinary=require('cloudinary'),
helmet=require('helmet'),
cookieParser=require('cookie-parser');

cloudinary.config({
  cloud_name:"dtgkjbim1",
  api_key:"326318763191423",
  api_secret:"NtG3mTQPSxLETSkzpavMAdWuxuM"
});

const port=process.env.PORT || 8000;

mongoose.connect(config.db);

mongoose.Promise=global.Promise;

require('./config/passport')(passport);


///middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.use(cookieParser());
///rutas
require('./routes/rutasAdmin/rutasAdmin')(app,passport);
require('./routes/rutasImagenes/rutasimagenes')(app,uploadPhotos,cloudinary);
require('./routes/rutasNavbar/rutasNabvar')(app);
require('./routes/rutasPaginas/rutasPaginas')(app);
require('./routes/rutasColeccion/rutasColeccion')(app);
require('./routes/rutasComentarios/rutasComentarios')(app);
require('./routes/rutasProveedor/rutasProveedor')(app);
require('./routes/rutasPreguntas/rutasPreguntas')(app);
require('./routes/rutasProductos/rutasProductos')(app);
require('./routes/rutasPromociones/rutasPromociones')(app);
require('./routes/rutasRespuestas/rutasRespuestas')(app);
require('./routes/rutasTags/rutasTags')(app);
require('./routes/rutasUsuarios/rutasUsuarios')(app,passport);
require('./routes/rutasVentas/rutasVentas')(app);
require('./routes/rutasTipos/rutasTipos')(app);
require('./routes/rutasVisitas/rutasVisitasDiarias')(app);
require('./routes/rutasConfiguracion/rutasConfiguracion')(app);
require('./routes/rutasImpuestos/rutasImpuestos')(app);
require('./routes/rutasNotificaciones/rutasNotificaciones')(app);
require('./routes/rutasEnvios/rutasEnvios')(app);
require('./routes/rutasPoliticas/rutasPoliticas')(app);
require('./routes/rutasInterfaz/rutasInterfaz')(app);

app.use(express.static(path.join(__dirname,"dist")));

app.get('*',(req,res)=>{
 res.sendFile(path.join(__dirname,"dist/index.html"));
});

app.listen(port,(req,res)=>{
  
  console.log('conectado en '+ port);

});