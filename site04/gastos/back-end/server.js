const express = require('express')
const app = express()
const morgan = require('morgan');
const {mongoose} = require('./database')
//settings
const port = 3000
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//middleware
app.use(morgan('dev'));

//routes
app.use(require('./src/routes/server.routes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
