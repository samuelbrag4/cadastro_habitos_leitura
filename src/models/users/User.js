class User {
    constructor(tituloLivro, avaliacao, status, generosLivro) {
        this.id = this.generateId();
        this.tituloLivro = tituloLivro;
        this.avaliacao = avaliacao;
        this.status = status;
        this.generosLivro = generosLivro;
    }

    generateId() {
        return Math.floor(Math.random() * 9999) + 1;
    }
}

export default User;