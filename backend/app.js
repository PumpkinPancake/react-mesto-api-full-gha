require('dotenv').config();

const mongoose = require("mongoose");

const express = require("express");

const helmet = require("helmet");

const rateLimit = require("express-rate-limit");

const { errors } = require("celebrate");

const router = require("./routes/router");

const {requestLogger, errorLogger } = require('./middleweares/logger');

const { MONGO_URL = "mongodb://127.0.0.1/mestodb", PORT = 3000 } = process.env;

const { errorHandler } = require('./middleweares/errorHandler');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();

app.use(express.json());

app.use(helmet());

app.use(limiter);

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });
