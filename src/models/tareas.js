import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
  nombreTarea: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 500,
  },
  precio: {
    type: Number,
    required: true,
    minLength: 1,
    maxLength: 10000,
  },
  imagen: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

const Tarea = mongoose.model("tarea", tareaSchema);
export default Tarea;
