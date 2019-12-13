var express = require("express")
var router = express.Router()
var db = require("../models")

router.get("/", (req, res) => {
    res.redirect("/burgers");
})

router.get("/burgers", (req, res) => {
    db.Burgers.findAll()
    .then(response => console.log(response))
    var hbsObject = { burger: response };
    return res.render("index", hbsObject);

})
router.post("/burgers/create", (req, res)=>{
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(burger => {console.log(burger)
    res.redirect("/");
    })
})

router.put("/burgers/update/:id", (req, res) =>{
    db.Burgers.update({
        devoured: true
    },
    {
    where: {
        id: req.params.id
    }
}
).then(burger => {
    res.json("/")
})
})
module.exports = router