import User from './User.js';

class UsersRepository {
    constructor() {
        this.users = [];
    }

    // Método para retornar todos os usuários - Fernanda
    getAllUsers() {
        return this.users;
    }

    // Método para adicionar um novo usuário - Samuel
    postUser(tituloLivro, avaliacao, status, generosLivro) {
        const user = new User(tituloLivro, avaliacao, status, generosLivro);
        this.users.push(user);
        return user;
    }

    // Método para atualizar usuário - Alexandra
    updateUser(id, tituloLivro, avaliacao, status, generosLivro) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            return null;
        }

        user.tituloLivro = tituloLivro;
        user.avaliacao = avaliacao;
        user.status = status;
        user.generosLivro = generosLivro;

        return user;
    }

}

export default UsersRepository;