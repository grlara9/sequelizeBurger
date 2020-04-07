var express = require("express")
var router = express.Router()
var db = require("../models/")



//router.get("/", (req,res) =>{
  //  res.redirect("/burgers")
//})

router.get("/", (req, res) => {
    db.Burgers.findAll({})
    .then(response => { 
        var hbsObject = { burger: response };
        return res.render("index", hbsObject);
    })
    .catch(err => console.log(err))
})


router.post("/burgers/create", (req, res)=>{
    db.Burgers.create({
        burger_name: req.body.burger
    })
    .then(burger => {
        console.log(burger)
        res.redirect("/");
    })
    .catch(err=> console.log(err))
})

router.put("/", (req, res) =>{
    db.Burgers.update({
        devoured: true
    },
    { 
    where: {
        id: req.body.id
    }
})
    .then(function(data) {
        res.redirect("/")
    })
})

router.delete("/:id", (req, res) => {
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
          console.log(data)
        
        res.redirect("/");
      });
  });

module.exports = router