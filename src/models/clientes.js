
import mongoose from 'mongoose';

const Usuarioschema = new mongoose.Schema({
    nombre:{
        type:String,
        trim:true

    },
    email:{
        type:String,
        unique:true
    },
    edad:{
        type:String
    },
    clase:[{
        // type: mongoose.Types.ObjectId, clase va sin corchetes si es uno solo
        type: [mongoose.Types.ObjectId],
        ref:'clase'

    }],
    password:{
        type:String,
        trim:true
    },
    telefono:{
        type:String,
        trim:true
    }
});

export default mongoose.model('cliente', Usuarioschema);

