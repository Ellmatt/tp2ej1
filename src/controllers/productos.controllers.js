import { validationResult } from "express-validator";
import Producto from "../models/productos";

export const listarProductos = async (req, res) => {
  try {
    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos)
  } catch (error) {
    console.log(error);
  }
};

export const obetenrProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    const productoBuscado = await Producto.findByID(req.params.id);
    res.status(200).json(productoBuscado)
  } catch (error) {
    console.log(error);
  }
};
