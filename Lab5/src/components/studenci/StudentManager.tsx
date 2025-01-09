import React from "react";
import Dodawanie from "./Dodawanie.tsx";

interface Student {
  Name: string;
  Surname: string;
  Year: number;
}

function StudentManager() {
  const [students, setStudents] = React.useState<Student[]>([
    { Name: "Michal", Surname: "Mikos", Year: 2004 },
    { Name: "John", Surname: "Doe", Year: 2003 },
    { Name: "Janusz", Surname: "Kowalski", Year: 2000 },
  ]);

  return (
    <div>
      <table>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.Name}</td>
              <td>{student.Surname}</td>
              <td>{student.Year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dodawanie
        onPress={(newStudent) => setStudents([...students, newStudent])}
      />
    </div>
  );
}

export default StudentManager;
