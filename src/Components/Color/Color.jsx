import { useState } from 'react';
import './Color.css';

export default function Color({ color, onDeleteColor }) {
   const [showConfirmation, setShowConfirmation] = useState(false);

   function handleDelete() {
      setShowConfirmation(true);
   }

   function handleConfirmDelete() {
      onDeleteColor(color.id);
      setShowConfirmation(false);
   }
   function handleCancelDelete() {
      setShowConfirmation(false);
   }

   return (
      <div
         className="color-card"
         style={{
            background: color.hex,
            color: color.contrastText,
         }}
      >
         <h3 className="color-card-headline">{color.hex}</h3>
         <h4>{color.role}</h4>
         <p>contrast: {color.contrastText}</p>
         <span className="color-ops">
            {!showConfirmation && (
               <button onClick={handleDelete}>Delete</button>
            )}
            {showConfirmation && (
               <>
                  <p>Are you sure?</p>
                  <button onClick={handleConfirmDelete}>Yes</button>
                  <button onClick={handleCancelDelete}>Cancel</button>
               </>
            )}
         </span>
      </div>
   );
}
