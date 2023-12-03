import { useContext, useState } from "react";
import { StudentsContext } from "../store/studentsContext";

export function AddNewStudentModal() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const { createStudent } = useContext(StudentsContext);

  function handleSubmit(e) {
    e.preventDefault();
    createStudent(name, lastName);
    setName("");
    setLastName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}
