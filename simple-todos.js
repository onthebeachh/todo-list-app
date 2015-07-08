if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    mynames: [
      { propername: "This is name #1" },
      { propername: "This is name #2" },
      { propername: "This is name #3" }
    ]
  });
}
