import { Router } from "express";
import UserRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();

let usuarios = [];

usuariosRoutes.get("/", (req, res) => {
  return res.status(200).json({
    message: usuarios.length == 0 ? "Nenhum usuário cadastrado" : `Total de usuários: ${usuarios.length}`,
    usuarios,
  }
  );
});

// Rota para adicionar um novo usuário
usuariosRoutes.post("/", (req, res) => {
  const { tituloLivro, avaliacao, status, generosLivro } = req.body;

  const user = new UserRepository();
  user.postUser(tituloLivro, avaliacao, status, generosLivro);

  usuarios = user.getAllUsers();

  return res.status(201).json({
    message: "Usuário cadastrado com sucesso!",
    usuarios,
  });
});

export default usuariosRoutes;