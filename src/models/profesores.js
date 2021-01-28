import mongoose from 'mongoose';

const ProfesorSchema = new mongoose.Schema({
    nombre:{
        type:String
    },
    email:{
        type:String
    },
    clase:{
        type:mongoose.Types.ObjectId,
        ref:'clase'
    }
})

export default  mongoose.model('profesores',ProfesorSchema);