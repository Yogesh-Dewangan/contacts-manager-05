
const express = require("express")
let contacts = require("../models/Contacts")
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        // const contactlist = await contacts.create({
        //     name: req.body.name ,
        //     designation: req.body.designation ,
        //     company: req.body.company ,
        //     industry: req.body.industry  ,
        //     email:req.body.email  ,
        //     phoneNumber: req.body.phoneNumber  ,
        //     country: req.body.country
        // })
        console.log(req.body)
        res.status(200).json({

            status: "success"
            // data: contactlist
        })

    } catch (e) {
        res.status(400).json({
            status: "Failed to post contacts",
            message: e.message

        })
    }
})


router.get("/",async  (req, res) => {
    try {
        const contactlist = await contacts.find()
        res.status(200).json({

            status: "success",
            data: contactlist
        })

    } catch (e) {
        res.status(400).json({
            status: "Failed to get contacts",
            message: e.message

        })
    }
})
router.get("/:key", async (req, res) => {
    try {
        let contactlist = await contacts.findOne({
            "$or": [
                {
                    email: { $regex: req.params.key }
                }
            ]
        })
        res.status(200).json({
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
router.delete("/:arr", async (req, res) => {
    try{
        let arr=req.params.arr
        for(let i=0;i<arr.length;i++){
            const del=await contacts.deleteOne({_id:arr[i]})
        }
        
    }catch(e){
        console.log(e)
    }
})
router.delete("/:id", async (req, res) => {
    try{
        let arr=req.params.id
        const del=await contacts.deleteOne({_id})

        
    }catch(err){
        console.log(err)
    }
})

module.exports = router