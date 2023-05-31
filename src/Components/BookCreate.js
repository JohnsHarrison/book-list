import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("")
  };

  return (
    <div>
      <form>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
