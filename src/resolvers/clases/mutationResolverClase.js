import Clase from '../../models/clase';
export const MutationClase = {
    Mutation:{
       async createClass(__,{ input }) {
           
           const { nombre, img, descripcion,nombreProfesor } = input;
           const existClass = await Clase.findOne({ nombre });
           if(existClass != null) throw new Error('No puedes crear una clase que ya existe')
           const claseYoga =   new Clase({nombre,img,descripcion,nombreProfesor});
           return claseYoga.save();
        },

        async updateClass(__, { id, input }) {
            try {
                let existClass = await Clase.findOne({ _id: id });
                if (!existClass) throw new Error("Upss... tu gemelo malvado regreso con tu nombre");
                existClass = await  Clase.findOneAndUpdate({ _id: id }, input, { new: true });
                return existClass;
            } catch (error) {
                console.log(error)
            }
          },

        async deleteClass(__, {id}){
            try {
                const existClass = await Clase.findOne({_id:id});
                if(!existClass) throw new Error('Lo siento no existe ese usuario');
                await Clase.findOneAndDelete({_id:id});
                return `${existClass.nombre} se eliminó correctamente`
            } catch (error) {
                console.log(error)
            }
        },
    //       // TODO modificar esta parte para que via context sea solo el usuario logueado pueda enviar
    // async notifyUserAndAddClass(__, {id}, ctx ) {
    //     // const {_id} = ctx.input;
    //     // console.log(ctx)
    //     // const { nombre, telefono } = input;

    //      let userRegisterClass = await Clase.find({alumno:ctx.input._id})
    //      if(!userRegisterClass){
    //          throw new Error("upss ya te has registrado en esta clase");
    //      }



    //     //Guardar en la bd
    //     userRegisterClass = await Clase.findOneAndUpdate({_id:id},{alumno:ctx.input._id});
    //     await client.messages.create({
    //     body: `Namaste ${ctx.input.nombre} te registraste en tu clase correctamente ❤️ `,
    //     from: "+12565675010",
    //     to: `+525545075246`,
    //     // to dynamic :c but we need to pay
    //     //to `+52${telefono}`
    //   });        
    //     return userRegisterClass;
    //   },
    }
}