const express = require('express')
const { allUsers } = require("../postgres/users")

const router = express.Router()

router.get("/", async (req, res) => {
  const users = await allUsers()
  res.end(JSON.stringify({
    data: users.rows,
    message: "success"
  }))
})

module.exports = router 