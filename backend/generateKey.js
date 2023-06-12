const crypto = require('crypto');

const randomString = crypto
  .randomBytes(16)
  .toString('hex');

console.log(randomString);