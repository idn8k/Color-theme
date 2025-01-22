import { nanoid } from 'nanoid';
import { Fragment } from 'react';
import { useState } from 'react';
nanoid;

const tempColor = {
   id: 'c5',
   role: 'secondary dark',
   hex: '#3949AB',
   contrastText: '#FFFFFF',
};

export default function ColorInput({ children, name }) {
   const [color, setColor] = useState([tempColor]);
   console.log(color);

   function handleColorChange(e) {
      let newColor = e.target.value;
      setColor((color) => [...color, { id: nanoid(), newColor }]);
   }
   return (
      <Fragment>
         <label htmlFor={name}>{children}</label>

         <input
            onChange={handleColorChange}
            type="text"
            id={name}
            name={name}
            defaultValue={color[0].hex}
         />

         <input
            onChange={handleColorChange}
            type="color"
            id={name}
            name={name}
            defaultValue={color[0].contrastText}
         />
      </Fragment>
   );
}
