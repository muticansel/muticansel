var PORT = process.env.PORT || 5000
var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const nodemailer = require('nodemailer');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('client'));

app.post('/sendMail', (req, res) => {
    const { email, message, date } = req.body;

    const messageBody = `
        <p>You have a new message from muti-cansel.herokuapp.com</p>
        <h3>DETAILS</h3>
        <ul>
            <li>Email: ${email}</li>
            <li>Request Date: ${date}</li>
        </ul>
        <h3>Message</h3>
        <p>${message}</p>
    `
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS
        }
    })

    let mailOptions = {
        from: 'cancel.muti@hotmail.com',
        to: 'cancel.muti@gmail.com',
        subject: 'Mail from muti-cansel.herokuapp',
        html: messageBody
    }

    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            console.log('Error Occurs', err);
        } else {
            res.redirect('/')
        }
    })
})

server.listen(PORT, () => {
})