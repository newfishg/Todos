var App = {
  templates: JST,
  indexView: function() {
    this.navView.render();
    this.updateTodos();
    this.updateTodosHeading();
  },
  createForm: function() {
    this.formView = new FormView();
  },
  
  renderFormFilledOut: function(modelData) {
    this.formView.render(modelData);
  },

  activeNavName: function() {
    return $('nav').find('.active').attr('data-title');
  },

  activeNavTotal: function() {
    return $('nav').find('.active').attr('data-total');
  },

  updateTodosHeading: function(title, count) {
    var title = this.activeNavName();
    var total = this.activeNavTotal() || 0;

    $('main header dt').text(title);
    $('main header dd').text(total);
  },

  updateNavView: function() {
    var activeNavTitle = this.activeNavName();
    var activeNavCatalog = this.findCatalog();
    
    this.navView.updateData();

    this.navView.render();
    $('nav').find('.active').removeClass('active');
    $('#' + activeNavCatalog + ' [data-title="'+ activeNavTitle + '"]').addClass('active');
  },
  updateTodos: function() {
    var filter = this.activeNavName();
    var catalog = this.findCatalog();
    var subTodosData;

    this.todos.sort();
    subTodosData = this.todos.toJSON();

    if (catalog === 'completed-items' || catalog === 'completed-todos') {
      subTodosData = this.filterCompleted(subTodosData);
    }

    if (filter === 'All Todos') {
      this.todosView = new TodosView({ collection: this.todos});
    } else if (filter === 'Completed') {
      this.todosView = new TodosView({ collection: new Todos(subTodosData) });
    } else {
      subTodosData = this.filterTodosData(subTodosData, filter);
      this.todosView = new TodosView({ collection: new Todos(subTodosData)  });
    }
  },

  filterTodosData: function(collection, filter) {
    return collection.filter(function(object, index, arr) {
      return object.dueDate === filter;
    });
  },

  filterCompleted: function(collection) {
    return collection.filter(function(object) {
      return object['completed'] === true;
    });
  },

  findCatalog: function() {
    return $('nav').find('.active').closest('div').attr('id');
  },

  filterTodosData: function(todos, filter) {
    return todos.filter(function(object, index, arr) {
      return object.dueDate === filter;
    });
  },

  destroyTodoFromTodos: function(id) {
    App.todos.destroy(id)
  },

  bindEvent: function() {
    _.extend(this, Backbone.Events);
    this.on('updateTodosView', this.updateTodos.bind(this));
    this.on('refreshNav', this.updateNavView.bind(this))
    this.on('refreshHeading', this.updateTodosHeading.bind(this));
    this.on('destroyTodo', this.destroyTodoFromTodos.bind(this));
    this.on('editTodos', this.renderFormFilledOut.bind(this));
  },
  
  init: function(todos) {
    this.indexPage = new IndexView();
    this.todos = new Todos(todos);
    this.todosView = new TodosView({ collection: this.todos });
    this.navView = new NavView({ collection: this.todos });
    this.createForm();
    this.bindEvent();
    this.updateTodosHeading();
  }
};