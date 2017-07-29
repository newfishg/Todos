var TodoView = Backbone.View.extend({
  tagName: 'tr',
  template: App.templates.todo,
  events: { 
    'click .delete-item': 'destroy',
    'click .list-item': 'toggleCompleted',
    'click label': 'editTodo'
  },
  editTodo: function(e) {
    // prevent event bubble to the parent td trigger toggleCompletee
    e.stopPropagation();

    App.trigger('editTodos', this.model.toJSON());
  },
  findTodoID: function(target) {
    return Number($(target).parents('tr').attr('data-id'));
  },
  toggleCompleted: function(e) {
    var status = this.model.get('completed');
    var id = this.findTodoID(e.target);
    var $checkbox = this.$('input');
    App.todos.get(id).set('completed', !status);
    $checkbox.prop('checked', !status);
    $.ajax({
      url: 'completed/' + id,
      type: 'post',
      success: function() {
        App.trigger('updateTodosView');
        App.trigger('refreshNav');
        App.trigger('refreshHeading');
      }
    });
  },
  destroy: function(e) {
    var id = this.findTodoID(e.target);
    // delete entire tr from the table
    this.remove();
    // delete this model from collection
    App.trigger('destroyTodo', id);
    // delete this data from data.json
    $.ajax({
      url: 'delete/' + id,
      type: 'post',
      data: this.model.toJSON(),
      success: function() {
        App.trigger('updateTodosView');
        App.trigger('refreshNav');
        App.trigger('refreshHeading');
      }
    });
  },
  render: function() {
    var id = this.model.get('id');
    this.$el.attr('data-id', id);
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});