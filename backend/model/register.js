const mongoose = require ('mongoose');

const registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim:true, 
        required:'firstName is required'
    },
    lastName: {
        type: String,
        trim:true, 
        required:'lastName is required'
    },
    password: {
        type: String,
        trim:true, 
        required:'password is required'
    },
    email:{
        type: String, 
        trim:true,
        unique: true, 
        required: 'Email is required'
    }
    
    
})


export default mongoose.model("Register", registerSchema)
