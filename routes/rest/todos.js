const ToDo = require("../../models/todo")

module.exports = {

  /**
   *
   * @api {get} /todos Todos list
   * @apiName todoList
   * @apiGroup todo
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess (200) {json} name description
   *
   *
   * @apiSuccessExample {type} Success-Response:
   * {
   *     "error" : false,
   *     "todos" : [{
   *          "message" : "task1",
   *          "isActive" : true,
   *      }]
   * }
   *
   *
   */
  async find(req, res) {
    try {
      const todos = await ToDo.find({})
        .exec()
      return res.json({ error: false, todos })
    } catch (err) {
      return res.status(500).json({ error: true, reason: err.message })
    }
  },

  /**
   *
   * @api {get} /todo/:id Todo Details
   * @apiName todoDetails
   * @apiGroup todo
   * @apiVersion  1.0.0
   *
   * @apiParam {String} id Todos unique ID.
   *
   * @apiSuccess (200) {json} name description
   *
   *
   * @apiSuccessExample {type} Success-Response:
   * {
   *     "error" : false,
   *     "todo" : [{
   *          "message" : "task1",
   *          "isActive" : true,
   *      }]
   * }
   *
   *
   */
  async get(req, res) {
    try {
      const todo = await ToDo.findOne({ _id: req.params.id })
        .exec()
      return res.json({ error: false, todo })
    } catch (err) {
      return res.status(500).json({ error: true, reason: err.message })
    }
  },

  /**
   *
   * @api {post} /todo todo manual instert
   * @apiName todoManualInsert
   * @apiGroup todo
   * @apiVersion  1.0.0
   *
   *
   * @apiParam  {String} message
   * @apiParam  {boolean} isActive
   *
   * @apiSuccess (200) {json} name description
   *
   * @apiParamExample  {json} Request-Example:
   * {
   *     "message" : "task1",
   *     "isActive" : true
   * }
   *
   *
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "todo" : {
   *          "message" : "task1",
   *          "isActive" : true
   *      }
   * }
   *
   *
   */
  async post(req, res) {
    try {
      const { message, isActive } = req.body
      if (message === undefined) {
        return res
          .status(400)
          .json({ error: true, reason: "Missing manadatory field `message`" })
      }

      let todo = await ToDo.create({
        message,
        isActive,
      })
      todo = todo.toObject()
      return res.json({ error: false, todo })
    } catch (err) {
      return res.status(500).json({ error: true, reason: err.message })
    }
  },

  /**
   *
   * @api {put} /todo/:id Todo update, one or multiple fields
   * @apiName todoUpdate
   * @apiGroup todo
   * @apiVersion  1.0.0
   *
   *
   * @apiParam {String} id Todos unique ID.
   *
   * @apiSuccess (200) {json} name description
   *
   * @apiParamExample  {json} Request-Example:
   * {
   *     "message" : "task1",
   *     "isActive" : true
   * }
   *
   *
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "ToDo" : {
   *          "message" : "task1",
   *          "isActive" : true
   *      }
   * }
   *
   *
   */
  async put(req, res) {
    try {
      const { message, isActive } = req.body
      const todo = await ToDo.findOne({ _id: req.params.id }).exec()
      if (todo === null) return res.status(400).json({ error: true, reason: "No task found!" })
      if (message !== undefined) todo.message = message
      if (isActive !== undefined && typeof isActive === "boolean") todo.isActive = isActive
      let updatedTodo = await todo.save()
      updatedTodo = updatedTodo.toObject()
      return res.json({ error: false, ToDo: updatedTodo })
    } catch (err) {
      return res.status(500).json({ error: true, reason: err.message })
    }
  },

  /**
   *
   * @api {delete} /todo/:id Todo delete
   * @apiName todoDelete
   * @apiGroup todo
   * @apiVersion  1.0.0
   *
   *
   * @apiParam {String} id Todos unique ID.
   *
   * @apiSuccess (200) {json} name description
   *
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false
   * }
   *
   *
   */
  async delete(req, res) {
    try {
      await ToDo.deleteOne({ _id: req.params.id })
      return res.json({ error: false })
    } catch (err) {
      return res.status(500).json({ error: true, reason: err.message })
    }
  }
}