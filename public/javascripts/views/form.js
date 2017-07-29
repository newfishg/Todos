var FormView = Backbone.View.extend({
  el: '#todo-form',
  template: App.templates.form,
  events: {
    'click #modal-background': 'hideForm',
    'click .mark-complete': 'markComplete',
    'submit': 'submitData'
  },
  hideForm: function() {
    var $f = this.$('form');
    $f.get(0).reset();
    $('.modal').hide();
  },
  markComplete: function(e) {
    e.preventDefault();
    var currentTodoID = this.todoID
    var todo = App.todos.findWhere({ id: currentTodoID });

    if (!this.todoID) {
      alert('Cannot mark as complete as item has not been created yet!');
      return
    }

    if (todo.get('completed')) {
      alert('This todo is already completed');
        return
    } else {
      todo.set('completed', true);

      $.ajax({
        url: 'completed/' + currentTodoID,
        type: 'post',
        success: function() {
          App.trigger('updateTodosView');
          App.trigger('refreshNav');
          App.trigger('refreshHeading');
        }
      });
    }

    this.hideForm();
  },
  renderEditForm: function(modelData) {
    this.todoID = modelData.id;
    var $f = this.$('form');
    $f.find('input#title').val(modelData.title);
    $f.find('select#day').val(modelData.day);
    $f.find('select#month').val(modelData.month);
    $f.find('select#year').val(modelData.year);
    $f.find('textarea').val(modelData.description);
    $('.modal').show();
  },
  submitData: function(e) {
    e.preventDefault();

    if (this.todoID) {
      this.edit();
    } else {
      this.create();
    }
  },
  create: function(e) {
    var $f = this.$('form');

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        console.log(json);
        App.todos.add(json);

        App.indexView();
      }
    });
    this.hideForm();
  },
  edit :function() {
    var $f = this.$('form');
    // update data in collection
    var modifyData = {};
    var todo = App.todos.findWhere({ id: this.todoID });

    $f.serializeArray().forEach(function(object) {
      modifyData[object.name] = object.value;
    });

    todo.set(modifyData);
    todo.set('dueDate', todo.formatDueDate.bind(todo));
    todo.set('date', todo.formatDate.bind(todo));

    // update data in the data.json
    $.ajax({
      url: 'edit/' + this.todoID,
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        App.trigger('updateTodosView');
        App.trigger('refreshNav');
        App.trigger('refreshHeading');
      }
    });
    this.hideForm();
  },
  render: function(todo) {
    delete this.todoID;
    if (todo) {
      this.renderEditForm(todo);
    } else {
      $('.modal').show();
    }
  },
  initialize: function() {
    this.$el.html(this.template);
  }
});