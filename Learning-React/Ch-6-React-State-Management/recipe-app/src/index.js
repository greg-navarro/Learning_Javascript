import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './components/Menu';
import data from './data/recipes.json';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
console.log(data);
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Menu recipes={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import { render } from "react-dom";
// import Menu from "./components/Menu";
// import data from "./data/recipes.json";

// render(<Menu recipes={data} />, document.getElementById("root"));
