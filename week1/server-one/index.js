'use strict';

import exrpess from 'express';
const app = exrpess();
const PORT = 3000;

app.use(exrpess.static('public'));

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

app.get('/catinfo', (_req, res) => {
  const cat = {
    name: 'Kissa',
    age: 6,
    weight: 5,
  };

  res.json(cat);
});

app.listen(PORT, () => console.log(`App running on a port ${PORT}`));

