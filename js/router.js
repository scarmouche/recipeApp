Router.configure({
  layoutTemplate: 'RecipeAppLayout'
});

// Router.route('/post/:_id', function () {
//   this.layout('ApplicationLayout');
// });

Router.route('/', function () {
  this.render('recentRecipes');

  this.render('recipeList', {to: 'leftContent'});
});

// Router.route('/recipes', function () {
//   this.render('recipeDetail');
//   var params = this.params; // { _id: "5" }
//   var id = params._id; // "5"
// });

Router.route('/recipe/:_id', function () {
  this.layout('RecipeAppLayout');

  this.render('recipeDetail', {
    data: function () {
      return Recipes.findOne({_id: this.params._id});
    }
  });

  this.render('recipeList', {to: 'leftContent'});

});

Router.route('/addRecipe', function () {
  this.render('addRecipe');

  this.render('recipeList', {to: 'leftContent'});
});
