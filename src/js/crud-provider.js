const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async(id) => {
    try {
        const resp = await fetch(`${urlCRUD}/${id}`);
        if (!resp) {
            throw `No existe el usuario ${id}`;
        }
        const { data } = await resp.json();
        return data;
    } catch (error) {
        throw `No existe el usuario ${id}`
    }
};

export {
    getUsuario,
};