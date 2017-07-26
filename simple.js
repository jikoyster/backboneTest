var TestModel = Backbone.Model.extend({
		initialize: function(){},

		defaults: {
			"text": "<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus cumque fugiat saepe asperiores voluptas, voluptatum. Est, sed sequi temporibus aspernatur fuga autem, nostrum iure unde, culpa eaque pariatur voluptatem veniam!</div><div>Sapiente, dicta quaerat voluptatum sit aliquam illo fuga repudiandae earum magni, velit optio natus. Voluptatum sunt perspiciatis, dolorem laudantium, voluptates expedita cum natus nulla earum totam ab necessitatibus, quod in.</div>"
		}
});


var TestView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var testModel = new TestModel();
		this.$el.html(testModel.get("text"));
	}
});

$(document).ready(function(){
	var renderView = new TestView({el: $("#myLayer")});
});