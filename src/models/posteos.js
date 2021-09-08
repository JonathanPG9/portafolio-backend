const mongo = require("mongoose");
let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1; // meses tienen 0 de base 
let year = fecha.getFullYear();


const Posteos = mongo.Schema({

    nombre: {
        type: String,
        require: true,
    },
    descripcion: {
        type: String,
        require: true
    },
    fecha: {
        type: String,
        default: dia + "/" + mes + "/" + year
    },
    avatar: {
        type: String
    }
})


module.exports = mongo.model("posteos", Posteos)