const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM agenda';

    const [agendador] = await connection.execute(query);
    return agendador;
};

const createAgenda = async (cliente) => {
    const query = 'INSERT INTO agenda(cliente, data) VALUES (?,?)';

    const { client } = cliente;
    const dateUTC = new Date(Date.now()).toUTCString();

    const [createdAgenda] = await connection.execute(query, [client, dateUTC]);
    return {insertId: createdAgenda.insertId};
};

const deleteAgendador = async(id) => {
    const query = 'DELETE FROM agenda WHERE id=?';
    const removedAgenda = await connection.execute(query, [id]);
    return removedAgenda;
};

const updateAgendador = async(id, agendas) => {
    const query = 'UPDATE agenda SET cliente=? WHERE id=?';

    const { client } = agendas;

    const updatedAgenda = await connection.execute(query, [client, id]);
    return updatedAgenda;
};

module.exports = {
    getAll,
    createAgenda,
    deleteAgendador,
    updateAgendador,
};