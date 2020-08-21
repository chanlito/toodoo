import express from 'express';

const app = express();

app.get('/lucky-number', (req, res) => {
  res.json({ number: Math.ceil(Math.random() * 1000) });
});

export default app;
