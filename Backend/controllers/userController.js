const userModel = require("../models/userModel")
const brcypt = require('bcryptjs')

const register = async (req,res)=>{
    try {
        const {name,email,password} = req.body

        if(!name||!email||!password){
            return res.status(401).json({
                success:false,
                message:'missing some fields'
            })
        }

      const preuser = await userModel.findOne({email})
      if(preuser){
        return res.status(401).json({
            success:false,
            message:'user already exist'
        })

      }
      const hashPass = await brcypt.hash(password,16)
      const user = await new userModel({name,email,password:hashPass}).save()

      return res.status(201).json({
        message:'user register successfully',
        success:true,
        user
      })


    } catch (error) {
        console.log(error)
        res.status(501).json({
            message:'error in server',
            error:error.message
        })
    }
}

const login = async (req,res)=>{
    try {
        const {email,password} = req.body
        if(!email ||!password){
            return res.status(401).json({
                message:'all fields are required',
                success:false
            })
        }
        let preUser = await userModel.findOne({email})
        if(!preUser){
            return res.status(401).json({
                message:'invalid email or password',
                success:false
            })
        }
        const matchPass = await brcypt.compare(password,preUser.password)
           if(!matchPass){
            return res.status(401).json({
                message:'invalid email or password',
                success:false
            })
           }
           preUser = preUser.toObject()
           delete preUser.password
           return res.status(201).json({
            message:`welcome back ${preUser.name}`,
            success:true,
            user:preUser
           })
    } catch (error) {
        console.log(error)
        res.status(501).json({
            message:'error in server',
            error:error.message
        })
    }
}



module.exports = {register,login}