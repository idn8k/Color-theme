export default function ColorForm() {
   function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      console.log(e);
      const data = Object.fromEntries(formData);
   }

   return (
      <form
         data-js="form"
         onSubmit={(e) => handleSubmit(e)}
      >
         <div>
            <label
               name="role"
               htmlFor="role"
            >
               Role
            </label>
            <input
               id="role"
               placeholder="Some color"
               type="text"
            />
         </div>
         <div>
            <label
               name="hex"
               htmlFor="hex"
            >
               Hex
            </label>
            <input
               id="hex"
               type="text"
               placeholder="#0000"
            />
            <input
               id="hex"
               type="color"
            />
         </div>
         <div>
            <label
               name="contrast"
               htmlFor="contrast"
            >
               Contrast Text
            </label>
            <input
               id="hex"
               type="text"
               placeholder="#0000"
            />
            <input
               id="contrast"
               type="color"
            />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
}
