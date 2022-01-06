import React from "react";
import Recipe from "./Recipe";
// import "./Menu.css";

export default function Menu({ recipes = [] }) {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((props, i) => (<p key={i}> {props.name} </p>))}
      </div>
    </article>
  );
}