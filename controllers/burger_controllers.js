var express = require ("express");
var router = express.Router();
var burgers = require ("../models/burgers");

router.get("/", function(req,res){
    burgers.all(function(data){
        var object = {
            burgers :data
        };
        console.log(object);
        res.render("index",object);
    });
});
router.post("/api/burgers", function(req,res){
    burgers.create(["burger_name"],[req.body.burger_name], function(result){
        res.json({ id: result.insertID });
    });
});
router.put("/api/burgers/:id",function(req,res){
    var style = "id = " + req.params.id;
    console.log("style", style);
    
    burgers.update({
        burger_name : req.body.burger_name
    },
    style, function(res){
        if(result.changedRows === 0){
            return res.render(404).end();
        }
        res.status(404).end();
    });
});
module.exports = router;