require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const chalk = require("chalk");

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

morgan.token("statusColored", (req, res) => {
  const status = res.statusCode;

  if (status >= 500) return chalk.red(status);
  if (status >= 400) return chalk.yellow(status);
  if (status >= 300) return chalk.cyan(status);
  return chalk.green(status);
});

app.use(
  morgan(
    `${chalk.magenta("[:method]")} :url :statusColored${chalk.blue(
      " :response-time ms - :res[content-length] "
    )}`
  )
);

require("./config/db.js");

const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
