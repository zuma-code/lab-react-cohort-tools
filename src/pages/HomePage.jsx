import { useState } from "react";
import StudentCard from "../components/StudentCard";

import studentsData from "../assets/students.json";

function StudentListPage() {
  // eslint-disable-next-line no-unused-vars
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="StudentListPage border-2 border-rose-500 m-2">
        <h1>Student List Page</h1>
        <div className="flex justify-between items-center p-2 font-bold border-b w-full">
          <span className="flex items-center justify-center" style={{ flexBasis: "20%" }}>Image</span>
          <span style={{ flexBasis: "20%" }}>Name</span>
          <span style={{ flexBasis: "20%" }}>Program</span>
          <span style={{ flexBasis: "20%" }}>Email</span>
          <span style={{ flexBasis: "20%" }}>Phone</span>
        </div>

      {students && students.map((student) => (
          <StudentCard key={student._id} {...student} />
      ))}
    </div>
  );
}

export default StudentListPage;
