PersonModel = Backbone.Model.extend({
	default: {
		name: "unknown"
	},
	initialize: function(){
		this.set({name: "dsaf"});
	}
});

PersonCollection = Backbone.Collection.extend({
	model: PersonModel
});


$(document).ready(function(){
	// individual model
	var student = new PersonModel({name: "John", id: 0});
	var teacher = new PersonModel();
		teacher.set({name: "Zetsu"});

	// collection
	var people = new PersonCollection([student, teacher]);

	console.log("people variable: "+ JSON.stringify(people.toJSON()) );
});