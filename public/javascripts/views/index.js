var IndexView = Backbone.View.extend({
  el: 'body',
  events: {
    'click a#add-todo': 'createTodo'
  },
  createTodo: function(e) {
    e.preventDefault();
    App.formView.render();
  },
  template: App.templates.index,
  render: function() {
    this.$el.html(this.template);
  },
  initialize: function() {
    this.render();
  }
});