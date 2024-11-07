import { Router } from "express";
import UserRepository from "../models/users/UserRepository.js";

const usuariosRoutes = Router();

let usuarios = [];

usuariosRoutes.get("/", (req, res) => {
  return res.status(200).json({
    message: usuarios.length == 0 ? "Nenhum usuário cadastrado" : `Total de usuários: ${usuarios.length}`,
    usuarios,
  }
  );
});

export default usuariosRoutes;