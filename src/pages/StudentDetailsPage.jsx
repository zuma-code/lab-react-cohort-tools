import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import placeholderImage from "./../assets/placeholder.png";
import studentsData from "./../assets/students.json";

function StudentDetailsPage() {
  const { studentId } = useParams(); // Obtiene el studentId de la URL

    // Encuentra el estudiante correspondiente en los datos
    const student = studentsData.find((s) => s._id === studentId);

    if (!student) {
      return <h2>Estudiante no encontrado</h2>;
    }

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-fuchsia-500 m-2">
      <h1>Student Details Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        {student && (
          <>
            <img
              src={student.image || placeholderImage}
              alt="profile-photo"
              className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
            />
            <h1 className="text-2xl mt-4 font-bold absolute">
              {student.firstName} {student.lastName}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mb-4 border-b pb-4">
              <p className="text-left mb-2 border-b pb-2">
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={student.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  {student.linkedinUrl}
                </a>
              </p>

              <p className="text-left mb-2 border-b pb-2">
                <strong>Email:</strong>{" "}
                <span className="ml-2 text-blue-500 hover:underline">
                  {student.email}
                </span>
              </p>

              <p className="text-left mb-2 border-b pb-2">
                <strong>Languages:</strong>{" "}
                {student.languages.join(", ")}
              </p>

              <p className="text-left mb-2 border-b pb-2">
                <strong>Program:</strong> {student.program}
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Background:</strong> {student.background}
              </p>

              <p className="text-left mb-2 pb-2">
                <strong>Cohort:</strong>
                <span className="ml-2 text-blue-500 hover:underline">
                  {student.cohort}
                </span>
              </p>
            </div>


            {/* Back button with Link*/}
            <Link to="/">
            <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
              Back
            </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default StudentDetailsPage;
