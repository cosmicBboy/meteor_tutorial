Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});

//set seen attribute of the error to be true, 
//1 millisecond after error template is rendered
Template.error.rendered = function() {
    var error = this.data;
    Meteor.defer(function() {
        Errors.update(error._id, {$set: {seen: true}});
    });
};