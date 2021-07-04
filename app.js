const express = require('express')
//var bodyParser = require('body-parser')
const router = express.Router();
const path = require('path');
var port = process.env.PORT || 3000;

var app = express();
app.use(express.json());
app.use(express.urlencoded({"extended": true}));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
  });

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});


router.post('/login', function (req, res) {
    res.statusCode = 200;
    res.send({ 'body': req.body });
});

app.use('/', router);
// Listen on port 3000, IP defaults to 127.0.0.1
app.listen(port, () => {
    console.log('Server listening at http://127.0.0.1:' + port + '/');
});