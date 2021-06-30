export class Usuario {
    static fromJSON({ id, email, first_name, last_name }) {
        return new Usuario({ id, email, first_name, last_name });
    }
    constructor(id, email, first_name, last_name) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
    }
}