const express = require("express")
const morgan = require("morgan")
const app = express(); 
/// coors para los puertos
const cors = require("cors"); 



app.use(cors({ 
  origin: ['https://feltymvp.web.app',"https://jonathanpaniagua.com", "http://localhost:3000"], 
  credentials: true
  }));

/// puerto  determinado o un puerto que cree un hosting.

  const PORT = process.env.PORT || 5000

 // escuchando el puerto

  app.listen(PORT , () =>{
    console.log("Estoy escuchando el puerto " + " " + PORT)
  })

 /// dotenv para crear  variables de entorno. 
  require("dotenv").config();

  
 // añadir espacios al json  
  app.set("json spaces", 2)

  
 // middleware 
  app.use(morgan("dev")) 
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))


/// permitir la utilizacion de apis desde todos los origenes

// app.use(function(req, res, next) {

//   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

///end point para practicar y consumir

app.use(require("./routes/bienvenida"));
app.use("/api/practica",require("./routes/practica"));
app.use("/api/pikachu",require("./routes/pikachu"));
// app.use("/api/feedback",require("./routes/feedback"));
app.use("/api/comentarios",require("./routes/comentarios"));
app.use("/api/form",require("./routes/form"));

// app.use((req,res) => {
  
//   res.status(404).send("<h1>Pagina no encontrada</h1>")

// }) 

// app.get("*",(req,res) => {
//   res.status(404).send("<h1>Pagina no encontrada >.< </h1>")
// })

// MongoDB 
  
const mongoose = require("mongoose")

mongoose.set('useFindAndModify', false);
/// data
mongoose.connect(process.env.MONGOS,{
useNewUrlParser: true, 
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false} , (err) =>{
  
  console.log("database conectada")
  if(err) return ("ocurrio un error");
  

}) 