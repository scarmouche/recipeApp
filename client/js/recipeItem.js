Template.recipeOption.helpers({
  selectedClass: function() {
    var recipeId = this._id,
        selectedRecipe = Session.get('selectedRecipe');
    if (selectedRecipe === recipeId) {
      return 'selected';
    };
  }
});