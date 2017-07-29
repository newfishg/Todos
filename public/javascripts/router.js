var router = new (Backbone.Router.extend({
  index: function() {
    App.indexView();
  },

  initialize: function() {
    this.route(/^\/?$/, 'index', this.index);
  }

  // initialize: function() {
  //   this.route(/^\/?$/, 'index', this.index);
  // }
}));