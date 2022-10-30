import { Router } from "express";
import {
    crearProducto,
  listarProductos,
  obetenrProducto,
} from "../controllers/productos.controllers";

const router = Router();

router.route("/productos")
.get(listarProductos) 
.post(crearProducto);

router.route("prodtictos/:id")
.get(obetenrProducto)
.put()
.delete();

export default router;
