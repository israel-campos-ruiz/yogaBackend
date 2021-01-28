import Clase from '../../models/clase';

export const QueryClaseResolver = {
    Query:{
        getClases: async() => await Clase.find({}),
        getClase: async(__, { _id }) => await Clase.findOne({_id})
    }
}