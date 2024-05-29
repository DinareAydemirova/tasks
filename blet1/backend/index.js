const express = require('express')
require("./src/config/db")
const app = express()
const port = 3000
const routes=require("./src/routes/productRoute")
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use("/", routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

