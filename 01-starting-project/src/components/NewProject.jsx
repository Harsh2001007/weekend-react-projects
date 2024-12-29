import React from "react";
import ProjectInputs from "./ProjectInputs";
import Button from "./Button";

function NewProject() {
  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button>Save</Button>
        </li>
      </menu>
      <div>
        <ProjectInputs label={"Title"} />
        <ProjectInputs label={"Description"} isTextArea={true} />
        <ProjectInputs label={"Due Date"} />
      </div>
    </div>
  );
}

export default NewProject;
