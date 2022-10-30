import Tarea from "../models/tareas";

export const listarTarea = async (req, res) => {
  try {
    const listaTarea = await Tarea.find();
    res.status(200).json(listaTarea);
  } catch (error) {
    console.log(error);
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    // console.log(req.body);
    const tareaBuscada = await Tarea.findById(req.params.id);
    res.status(201).json(tareaBuscada);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se pudo encontrar La tarea solicitada",
    });
  }
};

export const crearTarea = async (req, res) => {
  try {
    console.log(req.body);
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({
      mensaje: "La se agrego correctamente",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al intentar agregar la tarea",
    });
    console.log(error);
  }
};

export const editarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      mensaje: "La se dito correctamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error La no pudo editarse",
    });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Se pudo eliminar correctamente la tarea",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al borrar tarea",
    });
  }
};
