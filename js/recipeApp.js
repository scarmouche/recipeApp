Recipes = new Mongo.Collection("recipes");

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

  Template.addRecipe.events({
    "submit .new-recipe": function (event) {
      var recipeTitle = event.target.recipeTitle.value,
          ingredients = event.target.ingredients.value,
          instructions = event.target.instructions.value;

      Recipes.insert({
        recipeTitle: recipeTitle,
        ingredients: ingredients,
        instructions: instructions,
        createdAt: new Date() 
      });

      event.target.recipeTitle.value = "";
      event.target.ingredients.value = "";
      event.target.instructions.value = "";

      return false;    
    }
  });

}