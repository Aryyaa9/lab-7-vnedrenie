const express = require('express');
const app = express();
const PORT = process.env.PORT ||  4000;

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World! Приложение работает!');
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
  console.log(`📁 Рабочая директория: ${__dirname}`);
});

