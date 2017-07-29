var Todos = Backbone.Collection.extend({
  model: Todo,
  // comparator: 'completed',
  // multiple fields comparator: first completed, then id
  comparator: function(a, b) {
    if (a.get('completed') === b.get('completed')) {
      return a.get('id') - b.get('id');
    } else if (a.get('completed')) {
      return 1;
    } else {
      return -1;
    }
  },
  sortByDate: function(a, b) {
    if (a['date'] > b['date']) {
      return 1;
    }
    if (a['date'] < b['date']) {
      return -1;
    }
    return 0;
  },
  dueDateCountCollection: function(collection) {
    var allDueDate = this.getAllDueDate(collection);
    var uniqueDates = allDueDate.filter(function(date, index, arr) {
      return arr.indexOf(date) === index;
    });
    var dueDateItems = uniqueDates.map(function(date) {
      var obj = {};
      obj['due'] = date;
      obj['dueCount'] = this.countDueDate(allDueDate, date);
      return obj;
    }, this);

    return dueDateItems;
  },

  getAllDueDate: function(collection) {
    var result = [];
    collection.forEach(function(object) {
      if (object['dueDate']) {
        result.push(object['dueDate']);
      }
    });

    return result;
  },

  countDueDate: function(allDueDate, date) {
    return allDueDate.filter(function(el) {
      return el === date;
    }).length;
  },

  destroy: function(id) {
    this.remove(id);
  },
  isNewTodo: function(id) {
    return !this.pluck('id').includes(id);
  },
  
  initlialize: function() {
    _.extend(this, Backbone.Events);
    this.on('change:completed', this.hello);
  }
});