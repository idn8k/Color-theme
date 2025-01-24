import { useState } from 'react';
import './Color.css';

import ColorInput from '../Form/ColorInput';

export default function Color({ color, onDeleteColor, onEditCard }) {
   const [showConfirmation, setShowConfirmation] = useState(false);
   const [showEditBox, setShowEditBox] = useState(false);

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

   function handleUpdateColor(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      onEditCard(data, color.id);
   }

   function handleShowEditBox() {
      setShowEditBox(!showEditBox);
   }

   function handleCancelEdit() {
      setShowEditBox(!showEditBox);
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
         {!showConfirmation && <button onClick={handleDelete}>Delete</button>}
         {showConfirmation && (
            <>
               <p>Are you sure?</p>
               <button onClick={handleConfirmDelete}>Yes</button>
               <button onClick={handleCancelDelete}>Cancel</button>
            </>
         )}
         {!showEditBox ? (
            <button onClick={handleShowEditBox}>Edit</button>
         ) : (
            <form
               onSubmit={handleUpdateColor}
               className="edit-box"
            >
               <label htmlFor="role">Role</label>
               <input
                  type="text"
                  name="role"
                  placeholder="Role..."
               />
               <label htmlFor="hex">Hex</label>
               <ColorInput
                  name="hex"
                  value={color.hex}
               />
               <label htmlFor="contrastText"> Contrast color</label>
               <ColorInput
                  name="contrastText"
                  value={color.contrastText}
               />
               <span>
                  <button>Update</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
               </span>
            </form>
         )}
      </div>
   );
}
