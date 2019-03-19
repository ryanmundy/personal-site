
const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');
const axios = require('axios')
const app = express();
const bodyParser = require('body-parser');
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
let sslRedirect = require('heroku-ssl-redirect');
app.set('view engine', 'jade');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// enable ssl redirect
app.use(sslRedirect());

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

// Routes //
// POST route from contact form
app.post('/contact', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: GMAIL_USER,
    subject: 'New message from contact form at ryanmundy.herokuapp.com',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.render('contact-failure');
    }
    else {
      res.render('contact-success');
    }
  });
});

app.get('/forecast', (req, res) => {
  console.log(req.query);
  axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY}/${req.query.lat},${req.query.lng}`).then((response) => {
    res.send(response.data);
  }).catch(err => {
    res.sendStatus(500);
  });
})

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
