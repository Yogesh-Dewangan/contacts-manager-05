const express=require("express");
const data=require("../models/Users")
const bcrypt=require("bcrypt")
const { body ,validationResult } =require("express-validator")
const router=express.Router();

router.use(express.json());

router.post("/",
    body("password"),
    body("confirm_password"),
    body("email").isEmail(),

    async (req,res)=>{
        try{
            const repeatedEmail=await data.find({email:req.body.email});
            if(repeatedEmail.length==0){
                const errors=validationResult(req)
                if(!errors.isEmpty()){
                    res.status(400).json({
                        status:"Failed",
                        message:errors.array()
                    });
                }else {
                    if(req.body.password != req.body.confirm_password)
                        return res.status(400).json({
                            message:"Passwords do not match."
                        })

                        bcrypt.hash(req.body.password,10,async(err,hash)=>{
                            if(err){
                                console.log(err.message)
                            }
                            await data.create({
                                email:req.body.email,
                                password:hash
                            });
                        });
                        res.status(200).json({
                            status:"Registration Successful",
                            message:"User Can Login Now"
                        });
                }
              }  else{
                        res.status(400).json({
                            status:"Registration unsuccessful",
                            message:"User already exists"
                        })
                    }

            }catch(e){
                res.status(500).json({
                    status:"failed",
                    message:e.message

                })
            
        }

    }
    );

    module.exports = router;