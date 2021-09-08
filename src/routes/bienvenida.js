const {Router} = require("express"); 
const router = Router();

router.get("/" ,(req,res) => {

  res.send("Bienvenido a mi API  by Jonathan")

})
  
  module.exports = router;