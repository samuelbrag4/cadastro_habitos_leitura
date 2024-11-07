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
    }
}

export default UsersRepository;