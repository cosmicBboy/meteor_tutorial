//Greeting
if (Meteor.isClient) {
	Template.hello.greeting = function() {
		return "Welcome to the Summit";
	};

	Template.hello.events({
		'click input': function() {
			if (typeof console !== 'undefined')
				console.log("You pressed the button");
		}
	});
}

Questions = new Meteor.Collection("questions");
Answers = new Meteor.Collection("answers");

//Add answers
Template.addAnswer.events({
	'click input.add-answer' : function(e){
		e.preventDefault();
		var answerText = document.getElementById("answerText").value;
		Meteor.call("addAnswer", answerText, function(error, answerId){
			console.log('Added answer with ID:' +answerId);
		});

		document.getElementById("answerText").value="";
	}
});

//Add questions
Template.addQuestion.events({
	'click input.add-question' : function(e){
		e.preventDefault();
		var questionText = document.getElementById("questionText").value;
		Meteor.call("addQuestion", questionText, function(error, questionId){
			console.log('Added question with ID:' +questionId);
		});

		document.getElementById("questionText").value="";
	}
});

//Query Items
Template.answers.items = function() {
	return Answers.find({});
}

//event handler for voting buttons
Template.answers.events({
	'click': function () {
		Session.set("selected_answer", this._id);
	},
	'click a.yes' : function(e) {
		e.preventDefault();
		if(Meteor.userId()){
			var answerId = Session.get('selected_answer');
			console.log('updating yes count for answerId '+answerId);
			Meteor.call("incrementYesVotes",answerId);			
		}

	},
	'click a.no': function(e) {
		e.preventDefault();
		if(Meteor.userId()){
			var answerId = Session.get('selected_answer');
			console.log('updating no count for answerId '+answerId);
			Meteor.call("incrementNoVotes",answerId);			
		}

	}
});