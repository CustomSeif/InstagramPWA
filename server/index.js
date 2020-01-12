const express = require("express")
const app = express()

app.use(require("./controllers/production"))

app.listen(process.env.PORT || 5000, () => console.log("Listening..."))