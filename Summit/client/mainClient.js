var greet = function(name) {
  console.log("Hi. I'm " + name);
  console.log("Author: Niels Bantilan")
}

/*
if (Meteor.isClient) {

	greet('CLIENT');

	Template.hello.greeting = function() {
		return "Welcome to the Summit";
	}

	Template.hello.events({
		'click input': function() {
			if (typeof console !== 'undefined')
				console.log("You pressed the button");
		}
	})
};
*/

Answers = new Meteor.Collection("answers");

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

Questions = new Meteor.Collection("questions");

Template.addQuestion.events({
	'click input.add-question' : function(e){
		e.preventDefault();
		var questionText = document.getElementById("questionText").value;
		Meteor.call("addQuestion", questionText, function(error, questionId){
			console.log('Added question with ID:' +questionId);
		});

		document.getElementById("questionText").value="";
	}
})