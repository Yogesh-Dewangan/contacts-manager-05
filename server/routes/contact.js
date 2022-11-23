
const express = require("express")
let contacts = require("../models/Contacts")
const router = express.Router()

router.post("/import", async (req, res) => {
    try {
        const contactlist = await contacts.create({
            name: req.body.name ,
            designation: req.body.designation ,
            company: req.body.company ,
            industry: req.body.industry  ,
            email:req.body.email  ,
            phoneNumber: req.body.phoneNumber  ,
            country: req.body.country 
        })
        console.log(req.body)
        res.status(200).json({

            status: "success",
            data: contactlist
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
module.exports = router