import React, { useState } from "react";
import { useColors } from "./ColorProvider";

export default function AddColorForm({ onNewColor = f => f }) {
  const { addColor } = useColors();

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = e => {
    e.preventDefault();
    addColor(title, color);
    setTitle("");  // FIXME how can we switch back to the default???
    setColor("#000000");
  }

  return (
    <form onSubmit={submit}>
      <input onChange={e => setTitle(e.target.value)} type="text" placeholder="color title..." required />
      <input onChange={e => setColor(e.target.value)} type="color" required />
      <button>ADD</button>
    </form>
  );
}