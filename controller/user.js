const {user} = require('../models/user')


async function handleGetAllusers(req, res){
    const allDbUsers = await user.find()
    return res.json(allDbUsers)
}

async function handleGetUserById(req, res){
    try{
        const id = req.params.id;
        const User=  await user.findById(id);
        return res.status(200).json(User)
        } catch(error){
            console.log("error", error);
            return res.status(500).json({msg: "Internal Server Error"})
        }     
}

async function handleUpdateUserById(req, res){
    try{
        await user.findByIdAndUpdate(req.params.id, {last_name: "changed Name"})
        return res.status(201).send({status: 'updated'})
        }catch(error){
            console.log("error", error);
            return res.status(500).json({msg: "Internal Server Error"})  
        }
}


async function handleDeleteUserById(req, res){
    try{
        await user.findByIdAndDelete(req.params.id);
        res.send({status: 'Deleted Successfully'})
        }catch(error){
            console.log(error)
            return res.status(500).json({msg:"Interval Server Error"})
        }
}

async function handleCreateNewUser(req, res){
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender){
        return res.status(400).json({
            error: "bad Request"
        })
    }
    try{
        const result= await user.create({
             first_name: body.first_name,
             last_name:  body.last_name,
             gender: body.gender,
             email: body.email
         })
 
         console.log("results", result);
         return res.status(201).json({msg: "success"})
     }catch(error){
         console.log("error", error);
         return res.status(500).json({msg: "Internal Server Error"})
     }
}

module.exports = {
    handleGetAllusers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}