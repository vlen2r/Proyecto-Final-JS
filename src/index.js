import "./styles.css";
import * as Usuario_JSON from "./js/usuario-provider";
import { Usuario } from "./classes/usuario.class";

// Botones
const btnCreateUser = document.querySelector('#create_user');

// Form}
const formCreateUser = document.querySelector('#form_create_user');


Usuario_JSON.getUsuario(1)
    .then(msg => { console.log(msg) })
    .catch(msg => { console.error(msg) });

const user1 = new Usuario(1, 'valentin@test.com', 'Valentín', 'Test');
Usuario_JSON.createUsuario(user1).then(console.log);

btnCreateUser.addEventListener('click', (event) => {
    btnCreateUser.disabled = true;
    console.log(formCreateUser.children.length);

});