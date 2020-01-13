const express = require("express")
const app = express()

app.use(require("./controllers/posts"))
app.use(require("./controllers/profiles"))
app.use(require("./controllers/production"))

app.listen(process.env.PORT || 5000, () => console.log("Listening..."))