const express = require("express")
const Contacts = require("../models/Contacts")
const User = require('../models/Users')
const router = express.Router()
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post("/", async (req, res) => {
    try {
        const newData = req.body;
        console.log(newData);
        const contactlist = [];
        newData.forEach(async list => {
            contactlist.push(await Contacts.create({
                name: list.name,
                designation: list.designation,
                company: list.company,
                industry: list.industry,
                email:list.email,
                phoneNumber: list.phoneNumber,
                country: list.country
            })
            )
        })
        res.status(200).json({
            status: "success",
            data: contactlist
        })

    } catch (e) {
        res.status(400).json({
            status: "Failed to post Contacts",
            message: e.message

        })
    }
})


router.get("/", async(req, res) => {
    try {
        // const pageNo = req.query.page;
        const contactlist = await Contacts.find() //.skip(pageNo - 1).limit(10);
        res.status(200).json({
            status: "success",
            data: contactlist
        })

    } catch (e) {
        res.status(400).json({
            status: "Failed to get Contacts",
            message: e.message

        })
    }
})

router.get("/:key", async (req, res) => {
    try {
        let contactlist = await Contacts.findOne({
            "$or": [
                {
                    email: { $regex: req.params.key }
                }
            ]
        })
        res.status(200).json({
            status: "Success",
            contactlist
        })
    }
    catch (e) {
        res.status(400).json({
            status: "Failed to search contact",
            message: e.message

        })
    }
})

router.delete("/", async (req, res) => {
    try{
        const ids = req.body;
        ids.forEach(async id => {
            await Contacts.deleteOne({_id:id})
        })
        res.status(200).json({
            status: "Success"
        })
        // for(let i=0;i<arr.length;i++){
        //     const del=await Contacts.deleteOne({_id:arr[i]})
        // }    
    } catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

// router.delete("/:id", async (req, res) => {
//     try{
//         let arr=req.params.id
//         const del=await Contacts.deleteOne({_id})

        
//     }catch(err){
//         console.log(err)
//     }
// })

module.exports = router