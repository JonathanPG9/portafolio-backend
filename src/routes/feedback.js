// const {Router} = require("express");
// const router = Router(); 
// const feedback = require("../models/post") 

// /// visiaulizar todos los feedbacks
// router.get("/", async (req,res) =>{
       
//     try{ 
//       const lista =  await   feedback.find()
//       res.json(lista)
//     }
//     catch(err){
//         res.send(err)    }
// })
// /// agregar un nuevo feedback
// router.post("/", (req,res) => { 
//     const post = new feedback({
//         marca : req.body.marca,
//         talle:req.body.talle,
//         precio:req.body.precio,
//         unidades:req.body.unidades 

//     }) 
//     post.save()
//     .then(data => res.json(data))
//     .catch(err => res.send(err))
// })
// /// Remover un feedback
// router.delete("/:id", async (req,res) => {
//     try{
//         const borrar = await feedback.remove({_id: req.params.id})
//         res.json(borrar)
//     }catch(err)
//     {
//         res.send(err)
//     }
//  })
// // Actualizar un feedback.
//  router.put("/:id" , async (req,res) =>{
//    try{
//        const update = await feedback.findByIdAndUpdate(req.params.id, req.body, { new:  true, runValidators:  true })
//        res.json(update)

//    }
//    catch(err){
//        res.send(err)
//    }
//  })
//  // Selecionar un  feedback en especifico
//  router.get("/:id" , async (req,res) =>{
//     try{
//         const one = await feedback.findById({_id: req.params.id})
//         res.json(one)

//     }
//     catch(err){
//         res.send(err)
//     }
//   })
  

  
// module.exports = router