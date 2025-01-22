import ColorInput from './ColorInput';

export default function ColorForm({ colors }) {
   function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      console.log(data);
   }

   return (
      <form
         data-js="form"
         onSubmit={handleSubmit}
      >
         <fieldset>
            <label htmlFor="role">Role</label>
            <input
               type="text"
               id="role"
               name="role"
               placeholder="Role"
            />
         </fieldset>
         <fieldset>
            <ColorInput name="hex">Hex</ColorInput>
            <ColorInput name="contrastText">Text Contrast</ColorInput>
         </fieldset>

         <button type="submit">Submit</button>
      </form>
   );
}
