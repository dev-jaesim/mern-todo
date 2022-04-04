const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/Users');
const config = require('./config/key');
const bcrypt = require('bcrypt');

mongoose.connect(config.mongoURI);

app.use(cors());
app.use((bodyParser.json()));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (_, res) => res.send('Mern TODO'));
app.post('/api/signup', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, config.saltRounds)
    });

    newUser.save(error => {
        if(error) {
            return res.status(400).json({
                title: 'error',
                error: 'Email alreay in use'
            });
        }

        return res.status(200).json({
            title: 'user successfully added'
        });
    });
});

app.post('/api/login', (req, res) => {
    User.findOne({ username: req.body.username }, (error, user) => {
        if(error) {
            return res.status(500).json({
                title: 'server error',
                error
            });
        }

        if(!user) {
            return res.status(400).json({
                title: 'user is not found',
                error: 'invalid username or password'
            });
        }

        if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'login failed',
                error: 'invalid usernamen or password'
            });
        }

        // Authentication is done, give a user token
        let token = jwt.sign({ userId: user._id }, config.secretKey);
        return res.status(200).json({
            title: 'login successful',
            token
        });
    });
});
const port = process.env.PORT || 5000;

app.listen(port, err => {
    if(err) return console.log(err);
    console.log('Server running on port: ', port);
});