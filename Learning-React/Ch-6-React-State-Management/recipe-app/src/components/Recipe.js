import React from "react";
import IngredientsList from "./IngredientList";
import Ingredient from "./Ingredient";

export default function Recipe(
  name = "untitled",
  ingredients = [],
  steps = [],
) {
  const random_id = Math.random().toString();
  console.log("this recipe is named" + name);
  return (
    <section id={random_id}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Ingredient title="Cooking Instructions" steps={steps} />
    </section>
  );
}