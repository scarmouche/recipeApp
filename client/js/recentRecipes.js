Template.recentRecipes.helpers({
  recentRecipes: function() {
      return Recipes.find({}, {sort: {createdAt: -1}, limit: 3});
  }
});

Template.recentRecipes.events({
  "click .recentThumb": function(event) {
    var recipeId = this._id;
    Session.set('selectedRecipe', recipeId); 
    Router.go('/recipe/' + recipeId);  
  }
});