import React from "react";
import NoteType from "./NoteType";

const Sidebar = () => {
  const noteTypes = ["Personal", "Office", "Other"];
  return (
    <div className="w-1/4 flex flex-col justify-between bg-red-200 h-full  ">
      {noteTypes.map((element) => {
        return <NoteType label={element} />;
      })}
    </div>
  );
};
export default Sidebar;
