var express = require("express")
var router = express.Router()
var db = require("../models/")



router.get("/", (req,res) =>{
    res.redirect("/burgers")
})

router.get("/burgers", (req, res) => {
    db.Burgers.findAll({})
    .then(response => { console.log(response)

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

router.put("burgers/update/:id", (req, res) =>{
    db.Burgers.update({
        devoured: true
    },
    {
    where: {
        id: req.params.id
    }
}
).then(burger_put => {
    console.log(burger_put)
    res.json("/")
})
})
module.exports = router