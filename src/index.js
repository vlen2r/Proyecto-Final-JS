import { getUsuario } from "./js/crud-provider";
import "./styles.css";

getUsuario(15)
    .then(msg => { console.log(msg) })
    .catch(msg => { console.error(msg) });