import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/tp2ej1";

const connetDB = async () => {
  try {
    await mongoose.connet(url);
    console.log("BD conectada");
  } catch (error) {
    console.log(error);
  }
};
