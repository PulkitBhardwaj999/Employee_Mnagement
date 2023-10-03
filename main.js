const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const hostname = '127.0.0.1';

// Static Middleware for serving static files i.e js file, css file.
app.use(express.static(path.join(__dirname, 'static')));

// Setting up view engine as html (using 'consolidate')
const consolidate = require('consolidate');
app.engine('html', consolidate.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// ENDPOINTS
app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/Salary', function (req, res) {
    res.render('Salary.html');
});

app.get('/login', function (req, res) {
    res.render('login.html');
});

app.get('/signup', function (req, res) {
    res.render('signup.html');
});

// Create the server
app.listen(port, hostname, function (error) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`Server running at http://${hostname}:${port}/`);
});
