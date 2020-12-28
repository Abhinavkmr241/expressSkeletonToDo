const express = require("express")
const router = express.Router()

const todos = require("./todos")

router.get("/todos", todos.find)
router.get("/todo/:id", todos.get)
router.post("/todo", todos.post)
router.put("/todo/:id", todos.put)
router.delete("/todo/:id", todos.delete)

module.exports = router