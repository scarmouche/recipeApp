Recipes = new Mongo.Collection("recipes");

function getRecipes() {
  return Recipes.find({}, {sort: {createdAt: -1}});
}

function hasRecipes() {
  if (Recipes.find().count() > 0) {
    return true;
  } else {
    return false;
  }
}

if (Meteor.isClient) {

  Template.recipeList.helpers({
    recipes: getRecipes,
    hasRecipes: hasRecipes
  });

  Template.recentRecipes.helpers({
    recentRecipes: function() {
        return Recipes.find({}, {sort: {createdAt: -1}, limit: 3});
    },
    hasRecipes: hasRecipes
  });

  Template.recipeOption.helpers({
    selectedClass: function() {
      var recipeId = this._id,
          selectedRecipe = Session.get('selectedRecipe');
      if (selectedRecipe === recipeId) {
        return 'selected';
      };
    }
  });

  Template.recipeDetail.helpers({
    showSelectedRecipe: function() {
      var selectedRecipe = Session.get('selectedRecipe');
      return Recipes.findOne(selectedRecipe);
    }
  });

  Template.recipeList.events({
    "click .delete": function () {
        Recipes.remove(this._id);
    },
    "click .recipeItem": function () {
      var recipeId = this._id;
      Session.set('selectedRecipe', recipeId);  
    }
  });

 

  Template.recentRecipes.events({
    "click .recentThumb": function(event) {
      var recipeId = this._id;
      Session.set('selectedRecipe', recipeId); 
    }
  });

  Template.body.events({
    "submit .new-recipe": function (event) {
      var recipeTitle = event.target.recipeTitle.value;
      var ingredients = event.target.ingredients.value;
      var instructions = event.target.instructions.value;

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