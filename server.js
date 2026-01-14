require('dotenv').config();
const app = require('./src/app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`Endpoint de webhook: http://localhost:${PORT}/api/webhook`);
});
