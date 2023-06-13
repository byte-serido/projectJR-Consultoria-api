const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

//configurando para o gmail
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com", //servidor do Google
  port: 465, //porta smtp
  secure: true, //true para porta 465, false para outras
  auth: {
    user: "softsflavio@gmail.com", //seu email da gmail
    pass: "lrwezyhyuqxottdd", //sua senha do app gerada pelo Google
  },
  tls: {
    rejectUnauthorized: false, //fix de bug de envio
  },
});

const handlebarOptions = {
  viewEngine: {
    extName: ".html",
    defaultLayout: null,
  },
  extName: ".html",
};

try {
  transport.use("compile", hbs(handlebarOptions));
} catch (error) {
  // Lidar com a exceção aqui
  console.error("Erro ao compilar o handlebars:", error);
}

module.exports = transport;

transport.use("compile", hbs(handlebarOptions));

module.exports = transport;
