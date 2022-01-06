import React from "react";
import IngredientsList from "./IngredientsList";
import Ingredient from "./Ingredient";

export default function Recipe(
  name = "untitled",
  ingredients = [],
  steps = [],
) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Ingredient title="Cooking Instructions" steps={steps} />
    </section>
  );
}