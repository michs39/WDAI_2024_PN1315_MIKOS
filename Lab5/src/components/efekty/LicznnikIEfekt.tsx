import React, { useEffect } from "react";

function Licznik() {
  const [number, setNumber] = React.useState(0);
  return (
    <>
      <p>{number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
          console.log("licznik się zwiększył do " + (number + 1));
        }}
      >
        +
      </button>
      {useEffect(() => {
        console.log("Hello World");
      }, [])}
    </>
  );
}

export default Licznik;
