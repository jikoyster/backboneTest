PersonModel = Backbone.Model.extend({
	default: {
		name: "unknown"
	},
	initialize: function(){
		// this.set({name: "dsaf"});
	}
});

PersonCollection = Backbone.Collection.extend({
	model: PersonModel
});


$(document).ready(function(){
	// individual model
	var student = new PersonModel({name: "John", id: 0});
	var teacher = new PersonModel({name: "Zetsu", id: 1});

	// collection
	var people = new PersonCollection([student, teacher]);
		people.add([
			new PersonModel({name: "Naruto", id: 2	}),
			]);

	console.log("people variable: "+ JSON.stringify(people.toJSON()) );
});