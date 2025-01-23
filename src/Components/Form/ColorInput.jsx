import { useState } from 'react';

export default function ColorInput({ name, value }) {
   const [input, setInput] = useState(value);

   function handleChange(e) {
      setInput(e.target.value);
   }

   return (
      <>
         <input
            onChange={handleChange}
            type="text"
            name={name}
            id={name}
            value={input}
         />
         <input
            onChange={handleChange}
            type="color"
            value={input}
         />
      </>
   );
}
