if (Meteor.isServer) {
	Meteor.startup(function(){
	});
}

Answers = new Meteor.Collection("answers");
Questions = new Meteor.Collection("questions");

Meteor.methods({
	addAnswer : function(answerText){
		console.log('Adding Answer ...');
		var answerId = Answers.insert({
			'answerText' : answerText,
			'submittedOn': new Date(),
			'submittedBy' : Meteor.userId()
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
	},

	incrementYesVotes: function(answerID){
		console.log(answerID);
		Answers.update(answerID,{$inc : {'yes':1}});
	},
	incrementNoVotes: function(answerID){
		console.log(answerID);
		Answers.update(answerID,{$inc : {'no':1}});
	}
});	