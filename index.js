/* eslint-disable prettier/prettier */
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', {
    name: 'kazi nayeem',
    user: [
      {
        name: 'kazi nayeem',
        email: 'kazi nayeem@gmail.com',
      },
      {
        name: 'kazi nayeem',
        email: 'kazi nayeem@gmail.com',
      },
      {
        name: 'kazi nayeem',
        email: 'kazi nayeem@gmail.com',
      },
    ],
  });
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.listen(process.env.PORT);
