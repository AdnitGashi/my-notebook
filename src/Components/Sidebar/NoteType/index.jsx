import React from "react";
const NoteType = (label) => {
  console.log(label);
  return (
    <div className="" key={label.length}>
      {label}
    </div>
  );
};
export default NoteType;
