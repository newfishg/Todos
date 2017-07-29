var path = require('path');
var _ = require('underscore');
var Todos = require(path.resolve(path.dirname(__dirname), 'modules/todo.js'));

module.exports = function(router) {
  router.route('/delete/:id').post(function(req, res) {
    var todos = _(Todos.get()).reject(function(a) {
      return a.id === +req.body.id;
    });

    Todos.set(todos);
    res.status(200).end();
  });

  router.route('/completed/:id').post(function(req, res) {
    Todos.toggleCompleted(+req.params.id);

    res.status(200).end();
  });

  router.route('/edit/:id').post(function(req, res) {
    todo = req.body
    Todos.updateTodo(+req.params.id, todo);

    res.status(200).end();
  })

  router.route('/new').post(function(req, res) {
    var todo = req.body;
    var todos = Todos.get();

    todo.id = Todos.getLastID() + 1;
    todo.completed = false;
    todos.push(todo);
    Todos.set(todos);
    res.json(todo);
  });
}