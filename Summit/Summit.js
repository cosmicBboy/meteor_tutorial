var greet = function(name) {
  console.log("Hi. I'm " + name);
}

if (Meteor.isClient) {
  greet("CLIENT");
  Template.hello.greeting = function () {
    return "Welcome to the Summit.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    greet("SERVER");
  });
}
