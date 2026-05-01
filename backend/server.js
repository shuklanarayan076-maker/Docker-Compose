import express from "express"
import morgan from "morgan"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// ← ADD YEH ROOT ROUTE
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running! 🚀"
  })
})

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "hello brother"
  })
})

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "ajit" },
    { id: 2, name: "vaibhav" },
    { id: 3, name: "karan" }
  ]
  res.status(200).json(users)
})

app.get("/api/hello", (req, res) => {
  res.status(200).json({
    message: "hello world"
  })
})

app.listen(3000, "0.0.0.0", () => {
  console.log("✅ Server is running on port 3000")
})