const db = require('../config/database');

const receiveStatus = async (req, res) => {
  try {
    const { clientID  } = req.body;
    const { statusID  } = req.body;
    const { status } = req.body;

    if (!clientID) {
      return res.status(400).json({ error: 'Campo clientID é obrigatório.' });
    }

    if (!statusID) {
      return res.status(400).json({ error: 'Campo statusID é obrigatório.' });
    }

    if (!status) {
      return res.status(400).json({ error: 'Campo status é obrigatório.' });
    }

    const queryText = 'INSERT INTO status_notifications(client_id, status_id, status, payload) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [clientID, statusID, status, req.body];

    const result = await db.query(queryText, values);

    console.log('Novo log salvo:', result.rows[0]);
    return res.status(201).json({ message: 'Notificação salva!' });
  } catch (error) {
    console.error('Erro no Controller:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

module.exports = { receiveStatus };