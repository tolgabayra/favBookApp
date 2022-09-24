const express = require("express");
const app = express()
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")
const session = require('express-session')
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
app.use(morgan("dev"))
app.use(
  session({
      secret: 'f818asdasDDS48dSSgfd8',
      saveUninitialized: false,
      resave: false,
      cookie: {
          secure: false,
          httpOnly: true,
          sameSite: false,
          maxAge: 1000 * 60 * 60 * 24,
      },
  })
)

//----------------
app.use("/api/v1/auth", authRoutes)





app.listen(process.env.APP_PORT,() => {
  console.log("User Api Server Is Running...");
})