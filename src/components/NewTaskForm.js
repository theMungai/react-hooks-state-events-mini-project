import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && category) {
      const newTask = {
        id: Date.now(),  // Unique id for each task
        text,
        category,
      };
      onTaskFormSubmit(newTask);
      setText("");  // Clear input
      setCategory("");  // Reset category
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories
            .filter((cat) => cat !== "All")  // Exclude "All" from options
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
