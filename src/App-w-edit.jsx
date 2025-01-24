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

   function handleDeleteItem(id) {
      setColors((colors) => colors.filter((color) => color.id !== id));
   }

   function handleEditCard(newData, itemId) {
      const newArr = colors.map((color) => {
         if (color.id === itemId)
            return {
               ...color,
               role: newData.role,
               hex: newData.hex,
               contrastText: newData.contrastText,
            };
         return color;
      });
      setColors(newArr);
   }

   return (
      <>
         <h1>Theme Creator</h1>

         <ColorForm
            onSubmit={handleAddColor}
            colors={colors}
         />
         {colors.map((color) => {
            return (
               <Color
                  key={color.id}
                  color={color}
                  onDeleteColor={handleDeleteItem}
                  onEditCard={handleEditCard}
               />
            );
         })}
      </>
   );
}

export default App;

// Found the fixed issue!!
