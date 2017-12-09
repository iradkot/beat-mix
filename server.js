const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
const cloudinary = require("cloudinary");

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

//* cloudinary config
cloudinary.config({
  cloud_name: "beat-mix",
  api_key: "181499712398512",
  api_secret: "J5RdCrPSRdpeywaVflEWbWTPDHY"
});

//* nodemailer Email
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, //! secure:true for port 465, secure:false for port 587
  auth: {
    type: 'OAuth2',
    user: "elevationmosh@gmail.com",
    clientId: "265491403004-21btgq97uh78shfc7adeldkll2v3okka.apps.googleusercontent.com",
    clientSecret: "HZ0_4VY0RW9xjn6i90P8Ptvt",
    refreshToken: "1/CbRgegePWC7z-ezLKSYaHSnaCtRO31LwWnEDtxpLel8",
    accessToken: "GlsdBSmkSAsrfTsHjDsZHgwOH5j5zAVOFVsS",
    expires: 3599
  }
});

//* cloudinary route
app.get("/getFromCloudinary/:folder", function (req, res) {
  let folder = req.params.folder;
  cloudinary.v2.api.resources(
    { type: "upload", prefix: `${folder}/`, max_results: 1000 },
    function (error, result) {
      res.send(result);
    }
  );
});

//* email route
app.post("/contactus/email", function (req, res) {
  let data = req.body;
  let mailOptions1 = {
    from: "elevationmosh@gmail.com",
    // to: "beatmixdjs@gmail.com",
    to: "irad16@gmail.com",
    subject: `${data.name} - ${data.email} - ${data.number}`,
    text: data.content
  };

  transporter.sendMail(mailOptions1, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("Sent");
});

//handle facebook chatbot webhook
app.get("/webhook", function (req, res) {
  if (req.query["hub.verify_token"] === "my_verify_token_here") {
    res.send(req.query["hub.challenge"]);
  } else {
    res.send("Wrong token bud");
  }
});

//* Handle browser refresh by redirecting to index html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./server/static/index.html"));
});

// app.listen(1337);

//* Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Server is running on http://localhost:3000 or http://127.0.0.1:3000"
  );
});
