import { initialColors } from './lib/colors';
import { nanoid } from 'nanoid';

import ColorForm from './Components/Form/ColorForm';
import Color from './Components/Color/Color';
import './App.css';
import { useState } from 'react';

function App() {
   const [colors, setColors] = useState(initialColors);
   function handleAddColor(newData) {
      setColors((colors) => [{ id: nanoid(), ...newData }, ...colors]);
   }

   return (
      <>
         <h1>Theme Creator</h1>

         <ColorForm
            onSubmit={handleAddColor}
            colors={initialColors}
         />
         {colors.map((color) => {
            return (
               <Color
                  key={color.id}
                  color={color}
               />
            );
         })}
      </>
   );
}

export default App;

// Found the fixed issue!!
