/* eslint-env es6 */
const router = require("express").Router();

const auth = require("../middleweares/auth");

const cardsRouter = require("./cards");
const usersRouter = require("./users");

const {
  createUserValidator,
  loginValidator,
} = require("../middleweares/validation");

const { createUser, login } = require("../controllers/users");

const NOT_FOUND_ERROR = require("../errors/notFoundError");

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post("/signin", loginValidator, login);
router.post("/signup", createUserValidator, createUser);

router.use("/users", auth, usersRouter);
router.use("/cards", auth, cardsRouter);
router.use("/*", auth, (req, res, next) => {
  next(new NOT_FOUND_ERROR("This address does not exist"));
});

module.exports = router;
