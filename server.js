require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const { handleCORS } = require("./utils/customMiddeware");
const favicon = require("serve-favicon");
const utils = require("./utils/generalUtils");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: `${process.env.GOOGLE_APP_EMAIL}`,
    pass: `${process.env.GOOGLE_APP_PASSWORD}`,
  },
});

const app = express();
app.use(
  "/static",
  express.static(path.join(__dirname, "client/build/static/"))
);

app.use(favicon(__dirname + "/favicon.ico"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handle CORS
app.use((req, res, next) => {
  handleCORS(req, res, next);
});

// POST route for sending emailed message from the Contact form
app.post("/message", async (req, res) => {
  utils.sendMail(
    req,
    res,
    `Message from thirdwavebus.com`,
    //"dispatch@thirdwavebus.com",
    "torin.olat@gmail.com",
    transporter
  );
});

// POST route for sending emailed quote request from the free quote form
app.post("/quote", async (req, res) => {
  utils.sendMail(
    req,
    res,
    `${req.body.type} quote request from thirdwavebus.com`,
    //"darlenem@thirdwavebus.com",
    "torin.olat@gmail.com",
    transporter
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
