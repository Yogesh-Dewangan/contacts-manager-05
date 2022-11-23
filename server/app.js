const express = require('express');
const mongoose = require('mongoose');
const registerRoute = require('./routes/register')
const userRoute = require('./routes/user');
const contactRoute = require('./routes/contact');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const process = require('process');

const PORT = process.env.PORT || 5000;
const secret = process.env.SECRET;
const url = process.env.MONGO;
// const url = "mongodb://localhost:27017/contacts-manager"

mongoose.connect(url) 
    .then(console.log('mongoose atlas is up'))
    .catch(console.error);

const app = express();

// app.use('v1/contact', (req, res, next) => {
//     const token = req.headers.authorization;
//     // console.log(token);

//     if(token) {
//         jwt.verify(token, secret, (err, decoded) => {
//             if (err) {
//                 res.status(400).json({
//                     status:"Failed to decode",
//                     message: err.message
//                 })
//             }
//             if (decoded) {
//                 req.user = decoded.data;
//                 next();
//             }
//         })
//     } else {
//         res.status(403).json({
//             status: "Failed",
//             message: "Invalid Token"
//         })
//     }
// })

// app.use('/v1', registerRoute);
app.use('/v1/user', userRoute);
// app.use('/v1/contacts', contactRoute);

app.listen(PORT, () => console.log(`Server is up at ${PORT} port`))

// from csv to json
/*
const csvtojson = require('csvtojson');

csvtojson()
    // fromFile required csv file name
    .fromFile('csvFile.csv')
    .then(json => console.log(json))
*/