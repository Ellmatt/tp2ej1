import { Router } from "express";
import {
    crearProducto,
  editarProducto,
  listarProductos,
  obetenrProducto,
} from "../controllers/productos.controllers";

const router = Router();

router.route("/productos")
.get(listarProductos) 
.post(crearProducto);

router.route("prodtictos/:id")
.get(obetenrProducto)
.put(editarProducto)
.delete();

export default router;
