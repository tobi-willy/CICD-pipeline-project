
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Welcome to My Node.js Web App</h1>
    <p>Deployed with Argo CD & monitored with Prometheus!</p>
  `);
});


app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
