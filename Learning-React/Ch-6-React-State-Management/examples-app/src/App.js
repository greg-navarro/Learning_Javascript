import './App.css';
import ColorList from './components/ColorList';
import data from './components/color-data.json';
import { useState } from 'react';


function App() {
  const [colors, setColors] = useState(data);

  return (
    <div className="App">
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
