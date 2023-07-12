import React from "react";

export const Form = ({ onSubmit }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log();
    onSubmit(e.target.elements.text.value);
    e.target.reset();
  };
  return (
    <div>
      <div>Input your text</div>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "600px",
          gap: "20px",
        }}
      >
        <textarea
          name="text"
          rows={10}
          placeholder="Enter your text here..."
        ></textarea>
        <button type="submit">Find unique symbol</button>
      </form>
    </div>
  );
};
