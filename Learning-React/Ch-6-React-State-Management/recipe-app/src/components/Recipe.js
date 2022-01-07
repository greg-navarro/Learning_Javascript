import React from "react";
import IngredientsList from "./IngredientList";
import Ingredient from "./Ingredient";

export default function Recipe(
  name = "untitled",
  ingredients = [],
  steps = [],
) {
  const tname = typeof name;
  if (tname !== 'string') {
    console.log("The type of name is not string, it is " + tname);
    console.log(name);
  }
  console.log("steps\n" + typeof name.steps);

  return (
    <section id={name.toString().toLowerCase().replace(/ /g, "-")}>
      <h1>{name.name.toString()}</h1>
      <h4>Ingredients</h4>
      <IngredientsList list={name.ingredients} />
      <h4>Cooking Instructions</h4>
      <ul>
        {name.steps.map((step) => (<li key={Math.random().toString()}>{step}</li>))}
      </ul>
    </section>
  );
}