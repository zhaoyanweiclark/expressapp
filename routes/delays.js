const express = require('express')

const router = express.Router()

router.get("/", async (req, res) => {
  const delays = Number.parseInt(req.query.time, 10)
  if (delays) {
    await new Promise(r => setTimeout(r, delays))
  }
  const response = {
    data: Array(20).fill({
      "firstName": "firstName",
      "lastName": "lastName",
      "age": 20,
    }),
    message: { message: `Response delayed by ${delays || 0} ms` },
  }
  res.end(JSON.stringify(response))
})

module.exports = router