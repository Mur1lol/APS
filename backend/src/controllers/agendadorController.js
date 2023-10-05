const agendadorModel = require('../models/agendadorModel');

const getAll = async (_req, res) => {
    const agendador = await agendadorModel.getAll();

    return res.status(200).json(agendador);
};

const createAgenda = async (req, res) => {
    const createdAgenda = await agendadorModel.createAgenda(req.body);

    return res.status(201).json(createdAgenda);
};

const deleteAgendador = async(req, res) => {
    const { id } = req.params;

    await agendadorModel.deleteAgendador(id);
    return res.status(204).json();
};

const updateAgendador = async(req, res) => {
    const { id } = req.params;

    await agendadorModel.updateAgendador(id, req.body);
    return res.status(204).json();
};


module.exports = {
    getAll,
    createAgenda,
    deleteAgendador,
    updateAgendador,
};