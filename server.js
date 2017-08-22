const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

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
