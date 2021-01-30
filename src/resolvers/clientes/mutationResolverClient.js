import Usuario from "../../models/clientes";
import {  bcryptHashPasword, bcryptComparePassword } from "../../middlewares/bcrypt";
import { generateJWT } from "../../middlewares/jwt";
import crypto from 'crypto'
import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });
const accountSid = process.env.REACT_APP_ACOUNT_SID;
const authToken = process.env.REACT_APP_AUTH_TOKEN
import Twilio from 'twilio';
import { sendLinkRecoverPassword } from "../../helpers/sendEmail";
const client = new Twilio(accountSid, authToken);
export const mutationClientResolver = {
  Mutation: {
    async createClient(__, { input }) {
      const { email, password } = input;
      const existUser = await Usuario.findOne({ email });
      if (existUser != null)
        throw new Error(
          `Ups... tu gemelo malvado se registro antes prueba con otro correo`
        );
      //hash the passowrd in the db is the input.password
      input.password = await bcryptHashPasword(password);
      const usuario = new Usuario(input);
      return usuario.save();
    },
    async authenticateUser(__, { input }) {
      const { email, password } = input;
      const existUser = await Usuario.findOne({ email });
      const { _id, nombre, edad, clase } = existUser;
      if (!existUser)
        throw new Error("No puedo encontrarlo... intenta de nuevo ");
      const passwordCorrect = await bcryptComparePassword(
        password,
        existUser.password
      );
      if (!passwordCorrect) throw new Error("creo que escribiste mal algo...");
      const token = await generateJWT({ _id, nombre, email, edad, clase });
      return {
        client: existUser,
        token,
      };
    },


    async notifyUserAndAddClass(__, {  input }, ctx ) {
       const { nombre, email, _id,edad, telefono } = ctx.input
       const { clase  } = input;
       let existUser = await Usuario.findOne({_id: ctx.input._id });
       if(!existUser) { 
         throw new Error("Upss... tu gemelo malvado regreso intenta con otro nombre")
       }
       //Parse string to Object 
       const newClass = mongoose.Types.ObjectId(clase)
       const exist = existUser.clase.includes(newClass)
       if(exist){
          throw new Error('No puedes inscribirte dos veces en la misma clase prueba con otra :)')
       }
       existUser.clase = [...existUser.clase, newClass]
        //Send message to user 
        await client.messages.create({
             body: `Namaste ${ctx.input.nombre} te registraste en tu clase correctamente ❤️ `,
             from: "+12565675010",
             to: `+525545075246`,
             // to:ctx.input.telefono
             // to dynamic :c but we need to pay
             //to `+52${telefono}`
           });
       return existUser.save()
 
    },

    async updateUser(__, { _id, input }) {
      let existUser = await Usuario.find({ _id });
      if (!existUser){
        throw new Error("Upss... tu gemelo malvado regreso con tu nombre");
      }
      existUser =  await Usuario.findOneAndUpdate({ _id }, input, { new: true });
      return existUser;
    },

    

    // async recoverPassword(__, { _id, input }) {
    //   const { password } = input;
    //   input.password = await bcryptHashPasword(password);
    //   let existUser = await Usuario.find({ _id: _id });
    //   const { email, nombre } = existUser[0];
    //   if (!existUser) throw new Error("Upss... tu gemelo malvado regreso con tu nombre");
    //   existUser = await Usuario.findOneAndUpdate({ _id: _id }, input, {
    //     new: true,
    //   });
    //   const res = {
    //     mensaje: `Hola ${nombre} recuperaste tu contraseña ❤️ `,
    //     email: email,
    //     password: `Tu nueva contraseña es: ${password} no la olvides esta vez 😇`,
    //     existUser,
    //   };
    //   await sendEmail(email,res.mensaje,res.password)
    //   return res;
    // },
     async recoverPassword(__, {input}){
        const  {email} = input
        let user = await Usuario.findOne({email:email});
        if(!user){
          throw new Error('Si olvidaste tu correo no puedo ayudarte :c');
        }
        crypto.randomBytes(32, async ( err, buffer)=>{
          if(err) {
            console.log(err)
          }
          const token = buffer.toString("hex");
          user.resetToken = token;
          const linkUser = await user.save();
          sendLinkRecoverPassword(email,token);
         
          return linkUser;

        });

     },

     async insertNewPassword(__, {input}){
       const { password, token } = input 
       try {
         let user = await Usuario.findOne({resetToken:token});
         if(!user) throw new Error('no existe ese usuario')
         const newPasswordHash = await bcryptHashPasword(password)
         user.password = newPasswordHash
         user.resetToken = undefined
         await user.save()
          const response = {
            message:`${user.nombre} tu contraseña se actualizó correctamente`
          }
         return response
         
       } catch (error) {
         console.log(error)
       }
     },
    async deleteUserClass(__, {_id, _idClass}){
      let existUser = await Usuario.findOne({_id});
      const newArrayClass = existUser.clase.filter( c => c._id != _idClass)
      existUser.clase = newArrayClass;
      return existUser.save()
    }
  },
};
