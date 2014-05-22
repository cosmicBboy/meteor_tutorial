//Adds posts key and postsData value and
//passing that object to the helperList function
Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {submitted: -1}});
  }
});