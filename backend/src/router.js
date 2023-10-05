const express = require('express');

const router = express.Router();

const agendadorController = require('./controllers/agendadorController');
const agendadorMiddleware = require('./middlewares/agendadorMiddleware');


router.get('/', agendadorController.getAll);
router.post('/', agendadorMiddleware.validadeBody, agendadorController.createAgenda);
router.delete('/:id', agendadorController.deleteAgendador);
router.put('/teste/:id', agendadorMiddleware.validadeBody, agendadorController.updateAgendador);

module.exports = router;

/*
---------
| Rotas |
---------

app.get('/agendamentos', );
app.get('/agendamentos/:id', );
app.post('/agendamentos', );
app.put('/agendamentos/:id', );
app.delete('/agendamentos/:id', );

*/