const e = require("express");
const {Router} = require("express")
const router = Router();
const _ = require("underscore")

const pelis = require("../../practica.json")


router.get("/", (req,res) =>{

    res.json(pelis)

} )

router.post("/" , (req,res) =>{
   
  if(req.body.titulo,req.body.duracion,req.body.año,req.body.actores){
        
      id = pelis.length + 1;
      let newPeli = {}
      newPeli = {...req.body,id}
      pelis.push(newPeli) 
      res.json(pelis) 
  }
   else
   res.send("Falta algo")
})
 
router.delete("/:id" , (req,res) =>{
   
  id = req.params.id;

    if(req.body.titulo,req.body.duracion,req.body.año,req.body.actores){
      _.each(pelis , (x,i) =>{ 
      if(x.id == id){
        pelis.splice(i,1)
        res.json(pelis)
      }
    })
    }
   else
   res.send("Falta algo")  
})

router.put("/:id" ,(req,res) =>{

  id = req.params.id;

  if(req.body.titulo,req.body.duracion,req.body.año,req.body.actores){
    _.each(pelis , (x) =>{ 
    if(x.id == id){
      x.titulo = req.body.titulo,
      x.duracion = req.body.duracion,
      x.actores = req.body.actores,
      x.año = req.body.año
      res.json(pelis)
    }
  })
  }
 else
 res.send("Falta algo")   
} )


module.exports = router;
