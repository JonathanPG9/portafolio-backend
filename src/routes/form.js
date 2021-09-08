const {
  Router
} = require("express")
const router = Router()
const nodemailer = require("nodemailer")

require("dotenv").config()

  // creando el trasportador
  let submit = nodemailer.createTransport({
    service: 'gmail',
    port: 25,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  
router.post("/", (req, res) => {

  req.body.nombre &&
    req.body.texto &&
    req.body.mail &&
    req.body.asunto ?
    res.send("Bien esta todo perfecto") :
    res.send("Uhm... falta algo")

  // creamos un html simple  para el msj no es necesario pero queda mas estetico.
  const mail = `
    <h2> Correo desde el Portafolio creado by Jonathan.</h2>
    <ul>
    <li>  Nombre: ${req.body.nombre}</li> 
    <li> Asunto: ${req.body.asunto}</li>
    <li> Correo: ${req.body.mail}</li>
    </ul>
    <h2>Mensaje</h2>
    <p>${req.body.texto}</p>
    `;

  // el  msj a enviar con node
  let msj = {
    from: req.body.mail, // de quien es el correo
    to: "jonatanpaniagua21@gmail.com", // a quien se lo envio. 
    subject: req.body.asunto, //asusto
    text: req.body.texto, // texto
    html: mail, // html body
  }

  /// enviamos el msj  , agarrando el msj anteriormente creado 
  submit.sendMail(msj, (err, info) => {
    if (err) {
      console.log(err)
      res.send("Error")
    } else
      console.log("Enviado correctamente", info);
    res.send("Bien")
  })


})


module.exports = router;