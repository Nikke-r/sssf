'use strict';

import exrpess from 'express';
const app = exrpess();
const PORT = 3000;

app.use(exrpess.static('public'));
app.set('view engine', 'pug');

app.get('/', (_req, res) => {
  const cat = {
    name: 'Kissa',
    age: 6,
    weight: 5,
  };

  res.render('index', cat);
});

app.listen(PORT, () => console.log(`App running on a port ${PORT}`));

