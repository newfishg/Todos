var path = require('path');
var Todos = require(path.resolve(path.dirname(__dirname), 'modules/todo.js'));

/* GET home page. */
module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      todos: Todos.get(),
    });
  });
}
