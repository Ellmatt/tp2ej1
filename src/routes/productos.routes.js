import { Router } from "express";
import {
  listarProductos,
  obetenrProducto,
} from "../controllers/productos.controllers";

const router = Router();

router.route("/productos")
.get(listarProductos) 
.post();

router.route("prodtictos/:id")
.get(obetenrProducto)
.put()
.delete();

export default router;
