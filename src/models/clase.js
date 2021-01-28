import mongoose from 'mongoose';

const ClaseSchema = new mongoose.Schema({
    nombre:{
        type:String,
        trim:true,
        
    },
    img:{
        type:String,
        trim:true,
    
    },
    descripcion:{
        type:String,
        trim:true
    },

    nombreProfesor:{
        type:String,
        trim:true
    },
    alumno:{
        // [mongoose.Schema.Types.ObjectId]
        type: mongoose.Types.ObjectId,
        ref:'cliente'
    },
   
});
export default mongoose.model('clase',ClaseSchema);
