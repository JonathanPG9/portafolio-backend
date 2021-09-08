const {
    Router
} = require("express")
const router = Router()

const Posteos = require("../models/posteos")


/// Visualizar los comentarios

router.get("/", async (req, res) => {

    try {
        const comentarios = await Posteos.find()
        res.json(comentarios)
    } catch (err) {
        res.send(err)
    }
})

/// añadir comentario

router.post("/", (req, res) => {

    if (req.body.nombre && req.body.descripcion) {


        const nuevoPost = new Posteos({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            avatar: `https://ui-avatars.com/api/?name=${req.body.nombre}+${req.body.nombre.substring(4,7)}`
        })

        nuevoPost.save()
            .then(data => res.json(data))
            .catch(err => res.send(err))
    } else {
        res.send("falta algo")
    }
})

/// eliminar commentario 
router.delete("/:id", async (req, res) => {

    try {
        const nuevos = await Posteos.remove({
            _id: req.params.id
        })
        res.json(nuevos)
    } catch (err) {
        res.status(500).send(`Algo no esta bien... ${err}`)
    }
})

/// actualizar comentario

router.put("./id", async (req, res) => {
    try {
        const actualizados = await Posteos.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.json(actualizados)
    } catch (err) {
        res.status(500).send(`Algo no esta bien... ${err}`)
    }
})

module.exports = router