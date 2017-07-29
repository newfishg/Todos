var TodosView = Backbone.View.extend({
  tagName: 'tbody',
  // Following method is no need because we use App.indexView() when we success send a add todo request through ajax
  // addTodo: function(todo) {
    // because the this.collection is trigger add event
    // the parameter for this method is the model add to the collection
    // this.$todos = this.$todos || $('#items tbody');
    // var todoView = new TodoView({ model: todo });
    // Because we have to put completed todos in the bottom of the list
    // append is not need, instead, we refresh Todos
    // this.$todos.append(todoView.el);

    // App.trigger('updateTodosView');
  // },
  render: function() {
    this.collection.each(this.renderTodo.bind(this));
    $('table').html(this.el);
  },
  renderTodo: function(todo) {
    var todoView = new TodoView({
      model: todo
    });
    this.$el.append(todoView.el);
  },
  initialize: function() {
    // this.listenTo(this.collection, 'add', this.addTodo);
    this.render();
  }
});