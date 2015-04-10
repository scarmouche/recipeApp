Recipes = new Mongo.Collection("recipes");

Ingredients = new Mongo.Collection("ingredients");

if (Meteor.isClient) {

  Template.registerHelper('theRecipes', function() {
    return Recipes.find({}, {sort: {createdAt: -1}});
  });

  Template.registerHelper('hasRecipes', function() {
    if (Recipes.find().count() > 0) {
      return true;
    } else {
      return false;
    }
  });

 }