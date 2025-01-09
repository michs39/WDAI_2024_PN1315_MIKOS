import React from "react";

interface Student {
  Name: string;
  Surname: string;
  Year: number;
}

interface Props {
  onPress: (newStudent: Student) => void;
}

function Dodawanie(props: Props) {
  const [name, setName] = React.useState<string>("");
  const [surname, setSurname] = React.useState<string>("");
  const [year, setYear] = React.useState("2000");
  const yearAsNumber = Number(year);

  return (
    <>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        value={year}
        onChange={(e) => setYear(e.target.value)}
        type="number"
      />
      <button
        disabled={name === "" || surname == "" || year == ""}
        onClick={() =>
          props.onPress({ Name: name, Surname: surname, Year: yearAsNumber })
        }
      >
        Dodaj
      </button>
    </>
  );
}

export default Dodawanie;
