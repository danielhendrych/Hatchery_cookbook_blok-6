import React from "react";
import Ingredientview from "./Ingredientview";

function IngredientMap(props) {
  const ingredients = props.ingredients;

  return props.recipes.map((recipe) => {
    return (
      <Ingredientview 
        key={recipe.id}
        recipe={recipe}
        ingredient={ingredients.map((p) => [p.name])}
      />
    );
  });
}

export default IngredientMap;

