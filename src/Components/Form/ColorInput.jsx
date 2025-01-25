import { useState } from 'react';
import '../Form/ColorInput.css';

export default function ColorInput({ name, value }) {
   const [input, setInput] = useState(value);

   function handleChange(e) {
      setInput(e.target.value);
   }

   return (
      <div className="color-inputs-container">
         <input
            className="hex"
            onChange={handleChange}
            type="text"
            name={name}
            id={name}
            value={input}
         />
         <input
            className="color-box"
            onChange={handleChange}
            type="color"
            value={input}
         />
      </div>
   );
}
