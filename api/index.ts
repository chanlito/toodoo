import axios from 'axios';
import express from 'express';

const app = express();

app.get('/lucky-number', (req, res) => {
  res.json({ number: Math.ceil(Math.random() * 1000) });
});

app.get('/my-ip', async (req, res, next) => {
  try {
    const { data } = await axios.get('https://www.cloudflare.com/cdn-cgi/trace');
    const ip = (data as string)
      .split('\n')
      .find(i => i.includes('ip='))
      ?.split('=')?.[1];
    res.json({ ip });
  } catch (err) {
    next(err);
  }
});

export default app;
