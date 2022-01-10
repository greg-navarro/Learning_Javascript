import './App.css';
import ColorList from './components/ColorList';
import data from './components/color-data.json';
import { useState } from 'react';
import AddColorForm from './components/AddColorForm';
import { v4 } from "uuid";


function App() {
  const [colors, setColors] = useState(data);

  const createColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color
      }
    ];
    setColors(newColors);
  };

  return (
    <div className="App">
      <AddColorForm onNewColor={createColor} />
      <ColorList
        colors={colors}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color); // if correct color, change value for rating
          setColors(newColors);
        }}
      />
    </div>
  );
}

export default App;
