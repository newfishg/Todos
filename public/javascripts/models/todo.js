var Todo = Backbone.Model.extend({
  formatDueDate: function() {
    var todo = this.toJSON();
    if (!todo.year || !todo.month) {
        return 'No Due Date';
    }
    return todo.month + '/' + todo.year.slice(-2);
  },
  formatDate: function() {
    var todo = this.toJSON();
    var day = Number(todo.day);
    var month = Number(todo.month) - 1;
    var year = Number(todo.year);

    if (todo.dueDate === 'No Due Date') {
      return new Date(0);
    } else {
      return new Date(year, month, day);
    }
  },

  initialize: function() {
    this.set('dueDate', this.formatDueDate());
    this.set('date', this.formatDate());
  }
});