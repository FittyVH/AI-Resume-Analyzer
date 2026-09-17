const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}));

//routes
const authRouter = require('./routes/auth.routes')
app.use("/api/auth", authRouter)

const interviewRouter = require('./routes/interview.routes')
app.use("/api/interview", interviewRouter)

module.exports = app