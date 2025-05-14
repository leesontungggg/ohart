import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "sales@326concepts.com",
    pass: "qehtkqwglbeqqwhf",
  },
  from: "sales@326concepts.com",
});

export default transporter;
