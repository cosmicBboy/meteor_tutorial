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

Answers = new Meteor.Collection("answers");
Questions = new Meteor.Collection("questions");

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

Template.answers.items = function() {
	return Answers.find({});
}

Template.answers.events({
	'click': function () {
		Session.set("selected_answer", this._id);
	},
	'click a.yes' : function(e) {
		e.preventDefault();
		var answerId = Session.get('selected_answer');
		console.log(Session.get('selected_answer"'))
		console.log('updating yes count for answerId '+answerId);
		Meteor.call("incrementYesVotes",answerId);
	},
	'click a.no': function(e) {
		e.preventDefault();
		var answerId = Session.get('selected_answer');
		console.log('updating no count for answerId '+answerId);
		Meteor.call("incrementNoVotes",answerId);
	}
});
