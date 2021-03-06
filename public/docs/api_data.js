define({ "api": [
  {
    "type": "delete",
    "url": "/todo/:id",
    "title": "Todo delete",
    "name": "todoDelete",
    "group": "todo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todos unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/rest/todos.js",
    "groupTitle": "todo"
  },
  {
    "type": "get",
    "url": "/todo/:id",
    "title": "Todo Details",
    "name": "todoDetails",
    "group": "todo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todos unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"todo\" : [{\n         \"message\" : \"task1\",\n         \"isActive\" : true,\n     }]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "routes/rest/todos.js",
    "groupTitle": "todo"
  },
  {
    "type": "get",
    "url": "/todos",
    "title": "Todos list",
    "name": "todoList",
    "group": "todo",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"todos\" : [{\n         \"message\" : \"task1\",\n         \"isActive\" : true,\n     }]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "routes/rest/todos.js",
    "groupTitle": "todo"
  },
  {
    "type": "post",
    "url": "/todo",
    "title": "todo manual instert",
    "name": "todoManualInsert",
    "group": "todo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isActive",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"message\" : \"task1\",\n    \"isActive\" : true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"todo\" : {\n         \"message\" : \"task1\",\n         \"isActive\" : true\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/rest/todos.js",
    "groupTitle": "todo"
  },
  {
    "type": "put",
    "url": "/todo/:id",
    "title": "Todo update, one or multiple fields",
    "name": "todoUpdate",
    "group": "todo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todos unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"message\" : \"task1\",\n    \"isActive\" : true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"ToDo\" : {\n         \"message\" : \"task1\",\n         \"isActive\" : true\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/rest/todos.js",
    "groupTitle": "todo"
  }
] });
