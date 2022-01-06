import React from "react";
import Recipe from "./Recipe";
// import "./Menu.css";
// {props.ingredients} {props.steps}

export default function Menu({ recipes = [] }) {
  const first = recipes[0];
  const fname = first.name;
  const fi = first.ingredients;
  const fs = first.steps;
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((props, i) => (<Recipe key={i} {...props}> </Recipe>))}
        {/* <Recipe name={first.name} /> */}
      </div>
    </article>
  );
}