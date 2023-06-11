/* eslint-env es6 */
const winston = require('winston');
const expressWinston = require('express-winston');

// // создадим логгер запросов
// const requestLogger = expressWinston.logger({
//   transports: [
//     new winston.transports.File({ filename: 'request.log' }),
//   ],
//   format: winston.format.json(),
// });

// // логгер ошибок
// const errorLogger = expressWinston.errorLogger({
//   transports: [
//     new winston.transports.File({ filename: 'error.log' }),
//   ],
//   format: winston.format.json(),
// });

// После создания логгеров их нужно экспортировать:
// module.exports = {
//   requestLogger,
//   errorLogger,
// };
//  А затем импортировать в app.js:
// const { requestLogger, errorLogger } = require('./middlewares/logger');
// Пришло время подключить логгеры как мидлвэр. Логгер запросов нужно подключить до всех обработчиков роутов:
// app.use(requestLogger); // подключаем логгер запросов

// // за ним идут все обработчики роутов

// errorLogger нужно подключить после обработчиков роутов и до обработчиков ошибок:
// app.use(logger);

// app.post('/signup', createUser);

// app.post('/signin', login);
// app.use('/users', usersRouter);
// app.post('/posts', postsRouter);

// app.use(errorLogger); // подключаем логгер ошибок

// app.use(errors()); // обработчик ошибок celebrate
