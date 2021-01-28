import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });

const conectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("DB ONLINE");
  } catch (error) {
    console.log("Existe un error de conexión");
    console.log(error);
  }
};

export default conectDB;
