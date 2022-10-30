import { validationResult } from "express-validator";
import Producto from "../models/productos";

export const listarProductos = async (req, res) => {
  try {
    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos);
  } catch (error) {
    console.log(error);
  }
};

export const obetenrProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    const productoBuscado = await Producto.findByID(req.params.id);
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
  }
};

export const crearProducto = async (req, res) => {
  try {
    console.log(req.body);
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "El producto se agrego correctamente",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al intentar agregar producto",
    });
    console.log(error);
  }
};

export const editarProducto= async (req,res)=>{
 try{   await Producto.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({
        mensaje:'El producto se dito correctamente'
    })
}catch(error){
    res.status(404).json({
        mensaje:'Error el producto no pudo editarse'
    })
}
}