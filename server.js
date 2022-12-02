require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const { handleCORS } = require("./utils/customMiddeware");
const favicon = require("serve-favicon");

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
  try {
    await transporter.sendMail({
      from: req.body.email,
      to: "thirdwavebus@gmail.com",
      subject: "Message From thirdwavebus.com",
      text: `
      Phone: ${req.body.phone}\n
      Email: ${req.body.email}\n\n
      ${req.body.message}`,
    });
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }

  res.send({ success: true });
});

// POST route for sending emailed quote request from the free quote form
app.post("/quote", async (req, res) => {
  try {
    await transporter.sendMail({
      from: req.body.userEmail,
      to: "thirdwavebus@gmail.com",
      subject: "Quote request from thirdwavebus.com",
      text: `${req.body}`,
    });
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }

  res.send({ success: true });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
