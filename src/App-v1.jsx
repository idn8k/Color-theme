import { initialColors } from './lib/colors';

import ColorForm from './Components/Form/ColorForm';
import Color from './Components/Color/Color';
import './App.css';
import { useState } from 'react';

// const testColor = {
//    id: 'c1',
//    role: 'primary main',
//    hex: '#ff4a11',
//    contrastText: '#FFFFFF',
// };

function App() {
   const [currColor, setCurrColor] = useState('#00e089');

   function handleColorChange(e) {
      let newColor = e.target.value;
      setCurrColor((currColor) => (currColor = newColor));
   }

   return (
      <>
         <h1>Theme Creator</h1>

         <ColorForm
            onColorChange={handleColorChange}
            currColor={currColor}
         />
         {initialColors.map((color) => {
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
