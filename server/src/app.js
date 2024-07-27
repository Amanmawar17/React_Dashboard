import express from "express"
import cors from "cors"

const app = express()
var whitelist = ['https://react-dashboard-q8hw.vercel.app', 'http://localhost:5173']
var corsoption = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
app.use(cors({
    headers: {"Access-Control-Allow-Origin": "*"},
    credentials: true,
    optionsSuccessStatus: 200
}, corsoption))

app.use(express.json({limit: "900kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))


//routes import
import dataRouter from './routes/data.routes.js'

//routes declaration
app.use("/api/v1", dataRouter)


export { app }