const ToDo = require("../../models/todo")

module.exports = {

    //Gets list of todos
    async find(req, res) {
        try {
          const todos = await User.find({})
            .exec()
          return res.json({ error: false, todos })
        } catch (err) {
          return res.status(500).json({ error: true, reason: err.message })
        }
    },

    //Gets specific todo
    async get(req, res) {
        try {
          const todo = await User.findOne({ _id: req.params.id })
            .exec()
          return res.json({ error: false, todo })
        } catch (err) {
          return res.status(500).json({ error: true, reason: err.message })
        }
    },

    //add a todo
    async post(req, res) {
        try {
          const { message } = req.body
          if (message === undefined) {
            return res
              .status(400)
              .json({ error: true, reason: "Missing manadatory field `message`" })
          }

          let todo = await ToDo.create({
            message,
            isActive,
            createdAt,
            lastModifiedAt
          })
          todo = todo.toObject()
          return res.json({ error: false, todo })
        } catch (err) {
          return res.status(500).json({ error: true, reason: err.message })
        }
    },

    //update specific todo
    async put(req, res) {
        try {
          const { message, isActive } = req.body
          const todo = await ToDo.findOne({ _id: req.params.id }).exec()
          if (todo === null) return res.status(400).json({ error: true, reason: "No task found!" })
          if (message !== undefined) todo.message = message
          if (isActive !== undefined && typeof isActive === "boolean") todo.isActive = isActive
          let updatedTodo = await todo.save()
          updatedTodo = updatedTodo.toObject()
          return res.json({ error: false, user: updatedTodo })
        } catch (err) {
          return res.status(500).json({ error: true, reason: err.message })
        }
    },

    //delete specific todo
    async delete(req, res) {
        try {
          await ToDo.deleteOne({ _id: req.params.id })
          return res.json({ error: false })
        } catch (err) {
          return res.status(500).json({ error: true, reason: err.message })
        }
    }
}