const port = 12345;

const cors = require('cors')
const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express()
app.use(cors())

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));


app.post('/public_auth_key/', (req, res) => {
    const auth_key = req.body.auth_key;
    req.session.is_public = auth_key; 
    res.send({"status": "success", "failed_code": ""});
});

app.post('/cls/', (req, res) => {
    res.send({
        'name': 'developer', 
        "is_auth": true, 
        "is_staff": true, 
        'is_private': true
    });
}); 

app.get('/public/', (req, res) => {
    res.send({
        'name': 'developer',
        "is_auth": true, 
        "is_staff": false, 
        'is_private': false,
    }); 
});

app.post('/logout/', (req, res) => {
    res.send({"status": "success"});
})  

app.post('/login/', (req, res) => {
    if (req.body.username == 'developer' && req.body.password == 'pass') {
       return res.send({"status": "success", "name":"developer", "is_staff":true, "is_auth":true });
    } 
    return  res.send({"status": "success", "is_staff":false, "is_auth":false });
})

app.post('/register/', function(req, res) {
    if (req.body.username == 'developer' && req.body.password == 'pass') {
        return res.send({"status": "failed", "failed_code": "username" });
    }
    return res.send({"status": "success" });
})

//app authority end

app.listen(port, (err) => {
    if (err) {
        return console.log('bad');
    }
})
