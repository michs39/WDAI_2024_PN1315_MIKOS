import React from "react";

function Licznik() {
  const [number, setNumber] = React.useState(0);
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  );
}

export default Licznik;
