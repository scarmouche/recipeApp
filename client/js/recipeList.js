// Template.recipeList.helpers({
//   recipes: getRecipes,
//   hasRecipes: hasRecipes
// });

Template.recipeList.events({
  "click .delete": function () {
      Recipes.remove(this._id);
  },
  "click .recipeItem": function () {
    var recipeId = this._id;
    Session.set('selectedRecipe', recipeId);  
  }
});