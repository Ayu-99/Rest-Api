const express = require("express");
const Ninja = require("../models/ninja");
const router = express.Router();

//get list od ninjas from db
router.get("/ninjas", function(req,res,next){
    res.send({type:'GET'});
});


//add a new ninja to db
router.post("/ninjas", function(req,res,next){
    // var ninja = new Ninja(req.body);
    // ninja.save();
    
    Ninja.create(req.body).then(function(ninja){
          res.send(ninja);  
    })
    .catch(next);

});

//update ninja in db
router.put("/ninjas/:id", function(req,res,next){
    res.send({type:'PUT'});
});


//delete ninja from db
router.delete('/ninjas/:id', function(req,res,next){
    Ninja.findByIdAndRemove({_id:req.params.id})
    .then(function(ninja){
        res.send(ninja);
    })
    .catch(next);
    
});

module.exports=router;

//fdsfsfsfsfsdff







