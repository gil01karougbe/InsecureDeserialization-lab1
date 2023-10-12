var express = require('express');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var serialize = require('node-serialize');
const { readFile } = require('fs');
const base64 = require('base-64');


const app = express();
app.use(bodyParser.json());
app.use(cookieParser())

const users = [
  { username: 'admin', password: 'admin' },
  { username: 'user', password: 'password123'}
];


app.get('/', function(req, res) {
  readFile('./views/index.html', 'utf-8',(err, html) => {
    if (err) {
      res.status(500).send("Server Error")
    }
      res.send(html)
  })
});

app.get('/login', function(req, res) {
  readFile('./views/login.html', 'utf-8',(err, html) => {
    if (err) {
      res.status(500).send("Server Error")
    }
      res.send(html)
  })
});

app.post('/login', function(req, res) {
  const { username, password } = req.body;
  //console.log('Received login request:', { username, password });

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // Authentication successful
    const serializedUser = serialize.serialize(user);
    const encodedUser = base64.encode(serializedUser);
    res.cookie('user', encodedUser, { maxAge: 900000, httpOnly: true });
    res.json({ success: true });
  } else {
    // Authentication failed
    res.status(401).json({ error: 'Authentication failed' });
  }
});

app.get('/dashboard', function(req, res) {
  readFile('./views/dashboard.html', 'utf-8',(err, html) => {
    if (err) {
      res.status(500).send("Server Error")
    }
      res.send(html)
  })
});

app.get('/register', function(req, res) {
  readFile('./views/register.html', 'utf-8',(err, html) => {
    if (err) {
      res.status(500).send("Server Error")
    }
      res.send(html)
  })
});

app.post('/register', function(req, res) {});


app.use('/notes', (req, res, next) => {
  const encodedUser = req.cookies.user;
  //console.log(encodedUser);
  if (!encodedUser) {
    res.status(403).send('Forbidden');
    return;
  }
  // Base64 decode and deserialize user data
  try {
    const decodedUser = base64.decode(encodedUser);
    const user = serialize.unserialize(decodedUser);
    // Check if the user exists in the simulated user data
    const validUser = users.find(u => u.username === user.username && u.password === user.password);

    if (validUser) {
      // User is authenticated, proceed to the /notes route
      next();
    } else {
      res.status(403).send('Forbidden');
    }
  } catch (error) {
    res.status(403).send('Forbidden');
  }
});

app.get('/notes', (req, res) => {
  res.send('Welcome to your notes.');
});

app.listen(3000);
console.log("Listening on port 3000...");
