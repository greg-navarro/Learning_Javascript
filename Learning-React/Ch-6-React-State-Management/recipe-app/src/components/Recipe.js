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

  return (
    <section id={name.toString().toLowerCase().replace(/ /g, "-")}>
      <h1>{name.name.toString()}</h1>
      <IngredientsList list={name.ingredients} />
      <Ingredient title="Cooking Instructions" steps={name.steps} />
    </section>
  );
}