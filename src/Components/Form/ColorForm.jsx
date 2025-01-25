import '../Form/form.css';
import ColorInput from './ColorInput';

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
         <div className="inputs-container">
            <label htmlFor="role" />
            <input
               type="text"
               id="role"
               name="role"
               placeholder="Role..."
            />

            <label htmlFor="hex" />
            <ColorInput
               name="hex"
               value={initialData.hex}
            />
            <label htmlFor="contrastText" />
            <ColorInput
               name="contrastText"
               value={initialData.contrastText}
            />
         </div>

         <button
            className="submit-btn"
            type="submit"
         >
            Add color
         </button>
      </form>
   );
}
