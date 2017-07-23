//date format options
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

var TodoItem = Backbone.Model.extend({
	initialize: function(){
		//nothing to see here...
		/*console.log("hello Backbone!");*/
		

		this.bindEvents();
	},
	defaults: {
		dateOrigin: new Date().toLocaleDateString("en-US", options),
		description: "Pick up milk",
		status: "incomplete",
		id: 1
	},
	// bindEvents: function(){
	// 	this.on("change:description", function(model){
	// 		var newItem = model.get("description");
	// 		$('p').append( "item change: " + newItem );
	// 	});
	// }

	bindEvents: function(){
		this.on("change:description", function(model){
			var newDescription = model.get('description');
			
			
			var d = new Date();
			// var formattedDate = (d.getMonth()+1) +" "+ d.getDate();

			$('p').prepend(d.toLocaleDateString("en-US", options) +": new description = "+ newDescription +"<br />");
		});
	},
});

//*************************** THE VIEW
var TodoView = Backbone.View.extend({
	tagName: 'div',
	className: 'myClass',
	id: 'myId',
	defaults: {},
	initialize: function(){
		console.log(this.el);
		console.log(this.$el);

		//*** refers to div.theView #center-block
		this.$el.append("<div>Lorem ipsum dolor sit amet, \
			consectetur adipisicing elit. Eos, unde eaque tempora voluptate saepe, \
			fuga perferendis voluptatibus ipsam rerum pariatur iste illo non ullam maxime, \
			reprehenderit ad voluptatem exercitationem. Exercitationem!</div> ");

		$('#center-block').append(this.el);

		this.render();
	},
	render: function(){
		var template = _.template($("#ourTemplate").html(), {});
		this.$el.append(template);
	}
});

$(document).ready(function(){
	$('a').click(function(e){ e.preventDefault(); });
	$('[data-toggle="tooltip"]').tooltip();

	var todoItem = new TodoItem();

	$('p').append(todoItem.get("dateOrigin") +": "+ todoItem.get("description") + "<br />");

	//item description: change
	todoItem.set({ description: "Pick up 4 boxes of milk" });

	var todoView = new TodoView({el: $("#center-block")});
});