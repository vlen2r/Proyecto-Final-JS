const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async(id) => {
    const resp = await fetch(`${urlCRUD}/${id}`);
    if (!resp.ok) { throw `No existe el usuario ${id}` };
    const { data } = await resp.json();
    return data;
};

const createUsuario = async(user) => {
    const resp = await fetch(
        urlCRUD, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    if (!resp.ok) { throw `Hubo un error, intenta de nuevo!` };
    return await resp.json();
};

export {
    getUsuario,
    createUsuario,

};