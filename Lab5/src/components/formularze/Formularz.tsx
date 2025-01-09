import React from "react";

function Formularz() {
  const [tekst, setTekst] = React.useState<string>("");

  return (
    <>
      <input value={tekst} onChange={(e) => setTekst(e.target.value)} />
      <div>{tekst}</div>
    </>
  );
}

export default Formularz;
