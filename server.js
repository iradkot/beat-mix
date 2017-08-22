const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
const request = require('request');

const app = express();

//* tell the app to look for static files in these directories
app.use(express.static("./server/static/"));
app.use(express.static("./client/dist/"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//* nodemailer Email
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, //! secure:true for port 465, secure:false for port 587
  auth: {
    user: "elevationmosh@gmail.com",
    pass: "Elevation358"
  }
});

//* email route
app.post("/contactus/email", function(req, res) {
  let data = req.body;
  let mailOptions1 = {
    from: "elevationmosh@gmail.com",
    to: "mosh7890@gmail.com",
    subject: `${data.name} - ${data.email} - ${data.number}`,
    text: data.content
  };

  transporter.sendMail(mailOptions1, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("Sent");
});

/////////////////facebook chat bot! ////////////////////////
function getReplyBasedOnMessage(message){
  //At this point, you work some logical magic here
  //It could be a series of if-else statements, or something more intricate
  //For now, we'll just reply with something simple:

  return "Hey, I think it's cool that you said '" + message + "'";
}
function sendTextMessage(recipientId, messageText) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };

  callSendAPI(messageData);
}
function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: 'EAAByd9xrlrkBAGmZAZBpjSvWzBBsSDBaBddn8LDqC8zt8DGgRwDmNCktdBiqefcRuaBuxFPfdCdcM9WZBfvLUihANRSxRgAkqVF0ZAhLqDnI7X9eFlSjZC2evrriJIZC1d0CZBGC4GZCdvBbTlBr4ZBMq9xmZCzntv7dnu9r6T7OQ5kwZDZD' },
    method: 'POST',
    json: messageData
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) { 
        console.log("Successfully sent message");
    } 
    else {
        console.error("Unable to send message.");
        console.error(response);
        console.error(error);
    }
  });  
}
//recieving messeges:
app.post('/webhook', function (req, res) {
  var data = req.body.entry[0].messaging[0];
  var message = data.message;
  var senderID = data.sender.id;
  
  if(message){
    message = message.text;
    var reply = getReplyBasedOnMessage(message);
    
    sendTextMessage(senderID, reply);
  }
  else{ console.log("Something derped"); }

  res.sendStatus(200);  //required to send FB some response, else all fails.
});
//handle facebook chatbot webhook
app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'my_verify_token_here'){
    res.send(req.query['hub.challenge']);
  }
  else{res.send('Wrong token bud')}
});


//* Handle browser refresh by redirecting to index html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./server/static/index.html"));
});



// app.listen(1337);

//* Start the server
app.listen(3000, () => {
  console.log(
    "Server is running on http://localhost:3000 or http://127.0.0.1:3000"
  );
});
