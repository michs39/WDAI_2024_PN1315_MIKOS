import React from "react";

function Haslo() {
  const [first, setFirst] = React.useState<string>("");
  const [second, setSecond] = React.useState<string>("");

  const noPassword = "Proszę wprowadzić hasło";
  const badPassword = "Hasła nie są zgodne";
  const goodPassword = "";

  return (
    <>
      <input value={first} onChange={(e) => setFirst(e.target.value)} />
      <br />
      <input value={second} onChange={(e) => setSecond(e.target.value)} />
      <div>
        {first === second
          ? first === ""
            ? noPassword
            : goodPassword
          : badPassword}
      </div>
    </>
  );
}

export default Haslo;
