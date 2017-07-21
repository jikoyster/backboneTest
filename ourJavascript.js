var TodoItem = Backbone.Model.extend({
	initialize: function(){
		//nothing to see here...
		/*console.log("hello Backbone!");*/

		this.bindEvents();
	},
	defaults: {
		description: "Pick up milk",
		status: "incomplete",
		id: 1
	},
	bindEvents: function(){
		this.on("change:description", function(model){
			var newItem = model.get("description");
			$('p').append( "item change: " + newItem );
		});
	}
});

$(document).ready(function(){
	var todoItem = new TodoItem();

	$('p').append( todoItem.get("description") + "<br />");

	//item description: change
	todoItem.set({ description: "test" });
});