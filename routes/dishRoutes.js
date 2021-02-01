const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  morgan('kde');
  console.log('--->>>>>>1111')
  next();
})

  .get('/', (req, res, next) => {
    morgan('kde');
    console.log('--->>>>>>')
    res.end('will send the details'
      + 'to you!');
  })

  .post((req, res, next) => {
    res.end('will send the details' + req.body.name + 'with details' + req.body.description);
  })

  .put('/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.write('updating the dish');
    res.end('not allowed for dish' + req.params.dishId)
  })

module.exports = dishRouter;
