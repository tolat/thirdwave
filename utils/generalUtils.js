// Takes a camel case string and returns it as a capitalized and spaced title ,
// e.g. theCamelCaseString => The Camel Case String
module.exports.prettifyCamelCase = (str) => {
  let newString = str[0].toUpperCase();
  for (var i = 1; i < str.length; i++) {
    if (str[i].match(/[A-Z]/) != null) {
      newString = newString.concat(` ${str[i]}`);
    } else {
      newString = newString.concat(str[i]);
    }
  }
  return newString;
};

// Generic function to use a transporter to send mail to  from req
module.exports.sendMail = async (req, res, subject, recipient, transporter) => {
  let text = "";
  for (key in req.body) {
    text = text.concat(`${exports.prettifyCamelCase(key)}: ${req.body[key]}\n`);
  }

  try {
    await transporter.sendMail({
      from: req.body.userEmail,
      to: recipient,
      subject,
      text,
    });
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }

  res.send({ success: true });
};
