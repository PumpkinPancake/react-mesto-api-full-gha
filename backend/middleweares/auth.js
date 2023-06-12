/* eslint-env es6 */
const jwt = require("jsonwebtoken");

const UNAUTHORIZED_ERROR = require("../errors/unauthorizedError");

const { NODE_ENV, JWT_SECRDET } = process.env;

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new UNAUTHORIZED_ERROR("Invalid or expired token");
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(
      token,
      NODE_ENV === "production" ? JWT_SECRDET : "dev-secret"
    );
    req.user = payload;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return next(new UNAUTHORIZED_ERROR("Invalid token"));
    }
    next(err);
  }
};

module.exports = auth;
