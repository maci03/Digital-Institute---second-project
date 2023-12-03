import { useContext, useState } from "react";
import { StudentsContext } from "../store/studentsContext";

function AddNewStudentForm({ onClose }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const { createStudent } = useContext(StudentsContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!(name.trim() && lastName.trim())) return;

    createStudent(name, lastName);
    setName("");
    setLastName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastname">Lastname</label>
        <br />
        <input
          id="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add Student</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddNewStudentForm;
