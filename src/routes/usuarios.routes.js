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

// Rota para adicionar um novo usuário - Samuel
usuariosRoutes.post("/", (req, res) => {
  const { tituloLivro, avaliacao, status, generosLivro } = req.body;

  const user = new UserRepository();
  user.postUser(tituloLivro, avaliacao, status, generosLivro);

  usuarios = user.getAllUsers();

  return res.status(201).json({
    message: "Usuário cadastrado com sucesso!",
    usuarios,
  });

  // Validação dos campos obrigatórios - Gabriela Moleta
  if (!tituloLivro || !avaliacao) {
    return res.status(400).json({
      message: "Os campos de titulo do livro e avaliação devem ser preenchidos obrigatoriamente!",
    });
  }

  // Validação do campo avaliação - Gabriela Moleta
  if (status !== "pendente" && status !== "lendo" && status !== "finalizado") {
    return res.status(400).json({
      message: "O campo status deve ser preenchido com 'pendente', 'lendo' ou 'finalizado'!",
    });
  }

  // Validação do campo gênero no minimo 2 livros - Gabriela Moleta
  if (generosLivro.length < 2) {
    return res.status(400).json({
      message: "O campo gênero deve conter no mínimo 2 gêneros! Adicione mais gêneros.",
    });
  }
});

export default usuariosRoutes;