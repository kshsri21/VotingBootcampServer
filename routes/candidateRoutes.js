const express = require('express')
const router = express.Router()

const CandidateModel = require("../models/CandidateSchema")

router.post('/postCandidateImage',async(req,res)=>{
    try{
        const {accountAddress,imageName}=req.body;

        const saveCandidate = await CandidateModel.create({
            accountAddress:accountAddress,
            imageName:imageName
        })
        console.log(saveCandidate)
        res.status(200).json(saveCandidate)

    }catch(error){
        console.log(error)
    }
})

module.exports=router;