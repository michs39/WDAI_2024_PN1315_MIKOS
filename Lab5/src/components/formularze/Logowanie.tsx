import React from "react";

function Logowanie() {
  const [first, setFirst] = React.useState<string>("");
  const [second, setSecond] = React.useState<string>("");
  const [login, setLogin] = React.useState<string>("");

  const badPassword = "Hasła nie są zgodne";
  const goodPassword = "Zalogowano poprawnie";

  return (
    <>
      <input
        placeholder="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <input
        placeholder="hasło"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <br />
      <input
        placeholder="hasło"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          second === first ? alert(goodPassword) : alert(badPassword);
        }}
        disabled={login === "" || first == "" || second == ""}
      >
        Zaloguj
      </button>
    </>
  );
}

export default Logowanie;
