/**************** THE MODEL */
// todo Model

//create a model class
var TodoItem = Backbone.Model.extend({});

//create a model instance
var todoItem = new TodoItem({
	description: 'Pick up milk',
	status: 'incomplete',
	id: 1
});


/*
*** to get an attribute
todoItem.get('description');

*** to set an attribute
todoItem.set({ status: 'complete' });

*** sync to the server
todoItem.save();
*/
/************** THE VIEW */

var TodoView = Backbone.View.extend({
	render: function(){
		var html = '<h3>'+ this.model.get('description') +'</h3>';
		$(this.el).html(html);
	};
});

var todoView = new TodoView({ model: todoItem });
	todoView.render();
	console.log( todoView.el );