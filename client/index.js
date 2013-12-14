var Ractive = require('ractive');
require('ractive-backbone');
var Backbone = require('backbone');
Backbone.$ = $;

var fs = require('fs');

var Task = Backbone.Model.extend({
});

var Tasks = Backbone.Collection.extend({
  model: Task,
  url: '/tasks',
});

var tasks = new Tasks();

var tasksView = new Ractive({
  el: '#tasks',
  template: fs.readFileSync(__dirname + '/templates/tasks.html'),
  adaptors: ['Backbone'],
  data: {
    tasks: tasks,
  },
})
tasksView.on('create', function (event) {
  var task = tasks.create({});
  console.log("task create", task);
});
tasksView.on('remove', function (event) {
  var task = tasks.get(event.context);
  console.log("task remove", task);
  task.destroy();
});
