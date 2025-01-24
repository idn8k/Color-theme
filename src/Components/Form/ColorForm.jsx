import ColorInput from './ColorInput';
import '../../Components/Form/form.css';

export default function ColorForm({
   onSubmit,
   initialData = {
      role: 'Role...',
      hex: '#123456',
      contrastText: '#f3345f',
   },
}) {
   function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      onSubmit(data);
   }

   return (
      <form
         data-js="form"
         onSubmit={handleSubmit}
      >
         <label htmlFor="role">Role</label>
         <input
            type="text"
            id="role"
            name="role"
            placeholder="Role..."
         />
         <br />

         <label htmlFor="hex">Hex</label>
         <ColorInput
            name="hex"
            value={initialData.hex}
         />
         <br />
         <label htmlFor="contrastText">Color contrast</label>
         <ColorInput
            name="contrastText"
            value={initialData.contrastText}
         />

         <button type="submit">Submit</button>
      </form>
   );
}
