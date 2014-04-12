var greet = function(name) {
  console.log("Hi. I'm " + name);
  console.log("Author: Niels Bantilan")
}

/*
if (Meteor.isServer) {
	Meteor.startup(function(){
		greet("SERVER");

	});
}
*/

Answers = new Meteor.Collection("answers");
Questions = new Meteor.Collection("questions");

Meteor.methods({
	addAnswer : function(answerText){
		console.log('Adding Answer ...');
		var answerId = Answers.insert({
			'answerText' : answerText,
			'submittedOn': new Date()
		});
		console.log(answerId)
		return answerId;
	},
	addQuestion : function(questionText){
		console.log('Adding Question ... ');
		var questionId = Questions.insert({
			'questionText' : questionText,
			'submittedOn': new Date()
		});
		console.log(questionId)
		return questionId;
	}
});