import React from "react";
import { FaStar } from "react-icons/fa";
import { createArray } from "./lib";

const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect />
      ))}
    </>
  );
}