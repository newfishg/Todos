var NavView = Backbone.View.extend({
  el: 'nav',
  template: App.templates.nav,
  events: {
    'click header': 'renderMainPage',
    'click div article dl': 'renderSubMain'
  },

  cleanSelected: function() {
    this.$sidebar.find('.active').removeClass('active');
  },

  renderMainPage: function(e) {
    this.cleanSelected();

    $(e.target).closest('header').addClass('active');

    App.trigger('updateTodosView');
    App.trigger('refreshHeading');
  },

  renderSubMain: function(e) {
    this.cleanSelected();

    $(e.target).closest('dl').addClass('active');

    App.trigger('updateTodosView');
    App.trigger('refreshHeading');
  },

  filterCompletedTodos: function(collection) {
    return collection.filter(function(object, index, arr) {
      return object['completed'] === true;
    });
  },

  updateTemplateData: function() {
    var result = {};

    this.todosData = this.collection.toJSON().sort(this.collection.sortByDate);
    result['allCount'] = this.collection.length;
    result['allTodos'] = this.collection.dueDateCountCollection(this.todosData);

    this.todosData = this.filterCompletedTodos(this.todosData);
    result['completedCount'] = this.todosData.length;
    result['completedTodos'] = this.collection.dueDateCountCollection(this.todosData);
    this.templateData = result;
  },

  render: function() {
    this.updateTemplateData();
    this.$el.html(this.template(this.templateData));
    $('nav').find('#all-todos header').addClass('active');
  },

  updateData: function() {
    this.todosData = this.collection.toJSON().sort(this.collection.sortByDate);
  },

  initialize: function(todos) {
    this.$sidebar = $('nav');
    this.render();
  }
})