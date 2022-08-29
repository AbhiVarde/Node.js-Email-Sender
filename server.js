const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abhivarde189@gmail.com',
        pass: 'ryyoiouqyzrlxorx'
    }
});

let mailDetails = {
    from: 'abhivarde189@gmail.com',
    to: 'abhivarde99@gmail.com',
    subject: 'Test mail',
    text: 'This is a Node.js testing mail'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
    if (err) {
        console.log('Something went wrong');
    } else {
        console.log('Email sent successfully')
    }
});
