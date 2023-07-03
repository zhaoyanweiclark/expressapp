const express = require('express')
const app = express()
const port = 4000

app.get('/health_check_should_return_200', (req, res) => {
  res.send('Hello World!')
})

const usersRouter = require("./routes/users")
app.use("/api/users", usersRouter)

const delaysRouter = require("./routes/delays")
app.use("/api/delays", delaysRouter)

const poolRouter = require("./routes/pool")
app.use("/api/pool", poolRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})