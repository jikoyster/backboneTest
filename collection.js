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
	var naruto 	= new PersonModel({name: "Naruto Uzumaki", id: 2});

	// collection
	var people = new PersonCollection([student, teacher]);
		people.add([naruto]);

	console.log("people variable: "+ JSON.stringify(people.toJSON()) );

	people.remove([teacher]);
	console.log("people variable: "+ JSON.stringify(people.toJSON()) );
});