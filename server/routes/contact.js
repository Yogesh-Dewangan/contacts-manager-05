const express = require("express")
let Contacts = require("../models/Contacts")
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const newData = req.body;
        // const contactlist = [];
        // newData.forEach(async list => {
        //     contactlist.push(await Contacts.create({
        //         name: list.name,
        //         designation: list.designation,
        //         company: list.company,
        //         industry: list.industry,
        //         email:list.email,
        //         phoneNumber: list.phoneNumber,
        //         country: list.country
        //     })
        //     )
        // })
        console.log('newData', newData)
        res.status(200).json({
            status: "success"
            // data: contactlist
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
        const contactlist = await Contacts.find();
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