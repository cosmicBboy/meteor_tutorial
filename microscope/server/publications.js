//Publishing all posts
Meteor.publish('posts', function(){
    return Posts.find({}, {fields: {
        date: false
    }});
});

/* 
Meteor.publish('posts', function() {
    return Posts.find({flagged: false, author: author});
});

//Publishing some posts
Meteor.publish('somePosts', function(){
    return Posts.find({'author':'Tom'})
});
*/
