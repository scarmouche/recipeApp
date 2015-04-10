 Template.addRecipe.helpers({

  });

  Template.addRecipe.events({

    "click .moreIngredients": function(event, template) {
      event.preventDefault();
      var ingredientsDiv = '.addIngredients',
          inputCount = template.$(ingredientsDiv + ' input').length,
          newInput = '<input type="text" class="form-control" name="ingredient-' + inputCount + '" placeholder="ingredient" aria-describedby="add recipe ingredient" required />';
      
      template.$(ingredientsDiv).append(newInput);
    },

    "click .fewerIngredients": function(event, template) {
      event.preventDefault();
      var ingredientsDiv = '.addIngredients',
          inputCount = template.$(ingredientsDiv + ' input').length,
          newInput = '<input type="text" class="form-control" name="ingredient-' + inputCount + '" placeholder="ingredient" aria-describedby="add recipe ingredient" required />';
      
      template.$(ingredientsDiv).append(newInput);
    },

    "submit .new-recipe": function (event, template) {

      event.preventDefault();
      var recipeTitle = '',
          ingredients = [],
          instructions = '', // for now, could eventually be array
          ingredientsDiv = '.addIngredients',
          ingredientInputs = template.$(ingredientsDiv + ' input');

          // gather the values of all ingredients fields and put them into the ingredients array
          for (var i = 0; i < ingredientInputs.length; i++) {
            if (ingredientInputs[i].value) {
              ingredients.push(ingredientInputs[i].value)
            }
          };

          console.log(ingredients);


          // need to get the value of all the various ingredients fields which will have name attribute of ingredient-# starting with 0

          recipeTitle = event.target.recipeTitle.value;
          instructions = event.target.instructions.value;

      Recipes.insert({
        recipeTitle: recipeTitle,
        ingredients: ingredients,
        instructions: instructions,
        createdAt: new Date() 
      });

      event.target.recipeTitle.value = "";
      //event.target.ingredients.value = "";
      event.target.instructions.value = "";

      for (var i = 0; i < ingredientInputs.length; i++) {
          ingredientInputs[i].value = "";
      };

      return false;    
    }

  });

