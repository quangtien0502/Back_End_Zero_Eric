require('dotenv').config();
const express = require('express')
const webRoutes = require ('./routes/web')
const configViewEngine = require('./config/viewEngine')
const bodyParser = require('body-parser'); 
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//*Config view and static file
configViewEngine(app)

//* Test connection query  => Done


//* khai bao route
app.use('/test',webRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port} at hostname ${hostname}`)
})