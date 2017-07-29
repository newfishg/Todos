var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), 'data/data.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  },

  getLastID: function() {
    return this.__readFile().last_id;
  },

  updateTodo: function(id, todo) {
    var lastID = this.getLastID();
    var data = this.get();

    for (var i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].title = todo.title;
        data[i].day = todo.day;
        data[i].month = todo.month;
        data[i].year = todo.year;
        data[i].description = todo.description;
      }
    }
    
    fs.writeFileSync(file_path, JSON.stringify({
      last_id: lastID,
      data: data
    }));
  },

  toggleCompleted: function(id) {
    var lastID = this.getLastID();
    var data = this.get();
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].completed = !data[i].completed
      }
    }

    fs.writeFileSync(file_path, JSON.stringify({
      last_id: lastID,
      data: data
    }));
  },

  get: function() {
    return this.__readFile().data;
  },

  set: function(data) {
    data.id = this.getLastID() + 1;

    fs.writeFileSync(file_path, JSON.stringify({
      last_id: data.id,
      data: data
    }), 'utf8');
  }
};