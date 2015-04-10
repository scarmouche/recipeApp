Template.recipeDetail.helpers({
  showSelectedRecipe: function() {
    var selectedRecipe = Session.get('selectedRecipe');
    return Recipes.findOne(selectedRecipe);
  },
  theIngredients: function() {
  	return this.ingredients;
  }
});