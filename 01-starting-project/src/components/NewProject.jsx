import React, { useRef } from "react";
import ProjectInputs from "./ProjectInputs";
import Button from "./Button";

function NewProject({ onAdd }) {
  const titleref = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const titleValue = titleref.current.value;
    const descriptionValue = descriptionRef.current.value;
    const dueDateValue = dueDateRef.current.value;

    // save validation for the inputs

    onAdd({
      title: titleValue,
      description: descriptionValue,
      dueDate: dueDateValue,
    });
  };
  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>
      <div>
        <ProjectInputs label={"Title"} ref={titleref} />
        <ProjectInputs
          label={"Description"}
          isTextArea={true}
          ref={descriptionRef}
        />
        <ProjectInputs label={"Due Date"} ref={dueDateRef} type="date" />
      </div>
    </div>
  );
}

export default NewProject;
