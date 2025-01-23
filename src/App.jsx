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
      let newColors = colors.filter((color) => color.id !== itemId);
      let [newColor] = colors.filter((color) => {
         if (color.id === itemId) {
            return {
               ...color,
               role: newData.role,
               hex: newData.hex,
               contrastText: newData.contrastText,
            };
         }
         // let [newColor] = colors.filter((color) => {
         //    if (color.id === itemId) {
         //       return {
         //          ...color,
         //          role: newData.role,
         //          hex: newData.hex,
         //          contrastText: newData.contrastText,
         //       };
         //    }
      });
      console.log('itemId:', itemId);
      console.log('newColor:', newColor);
      console.log('newColors:', newColors);

      setColors((colors) => [...newColors, newColor]);
      console.log('colors:', colors);
   }

   // color.role = newData.role;
   // color.hex = newData.hex;
   // color.contrastText = newData.contrastText;

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
