interface Student {
  name: string;
  surname: string;
  year: number;
}

function Studenci() {
  const students: Student[] = [
    { name: "Michal", surname: "Mikos", year: 2004 },
    { name: "John", surname: "Doe", year: 2003 },
    { name: "Janusz", surname: "Kowalski", year: 2000 },
  ];

  return (
    <table>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td>{student.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Studenci;
