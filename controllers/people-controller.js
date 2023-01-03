// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()
const {People} = require('../models')
// we can use 'object-destructuring' to access just the model we need for this controller


// mongoose connection
require("../config/db.connection")

// ROUTES

// PEOPLE INDEX ROUTE
router.get("/", async(req, res)=> {
    try {
        res.json(await People.find({}))
    } catch(err) {
        res.status(400).json(err)
    }
})

// PEOPLE CREATE ROUTE
router.post("/", async(req, res)=> {
    try {
        // create new person
        res.json(await People.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
})

// PEOPLE SHOW ROUTE
router.get("/:id", async(req, res)=> {
    try{
        res.json(await People.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// PEOPLE DELETE ROUTE
router.delete("/:id", async (req, res)=>{
    try {
        res.json(await People.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// PEOPLE UPDATE ROUTE
router.put("/:id", async(req, res)=>{
    try {
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch(error) {
        res.json(400).json(error)
    }
})

module.exports = router
