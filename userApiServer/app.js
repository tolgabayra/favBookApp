const express = require("express");
const app = express()
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")
const env = require("./configs/config")
const services = require("./services")
//------Routes-----
const authRoutes = require("./routes/auth")


//-----------------
env.configenv
services()
//-----------------
app.use(cors({ origin: true, credentials: true }))
app.use(helmet())
app.use(express.json())
app.use(morgan("common"))

//----------------
app.use("/api/v1/auth", authRoutes)





app.listen(process.env.APP_PORT,() => {
  console.log("User Api Server Is Running...");
})