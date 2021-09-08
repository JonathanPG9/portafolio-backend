const {Router} = require("express")
const router = Router();
const fetch = require('node-fetch');



router.get("/", async (req,res) =>{
   const llamar = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    const traido =  await llamar.json();
    res.json(traido)
})



module.exports = router