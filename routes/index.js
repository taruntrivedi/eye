var express = require("express"),
    router =  express.Router()

router.get("/", function(req, res){
    res.render("index");
})

router.get("/about_us",function(req,res){
    res.render("about_us");
})

router.get("/patient_portal",function(req,res){
    res.render("patient_portal");
})

router.get("/eyecare_services",function(req,res){
    res.render("eyecare_services");
})


router.get("/frames",function(req,res){
    res.render("frames");
})

router.get("/blog",function(req,res){
    res.render("blog");
})


module.exports =router;