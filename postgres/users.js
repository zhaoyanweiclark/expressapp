const pool = require("./pool")

async function allUsers() {
  return pool.query("SELECT * FROM public.user")
}

module.exports = {
  allUsers
}