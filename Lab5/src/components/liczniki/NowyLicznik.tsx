import React from "react";
import Przycisk from "./Przycisk.tsx";

function NowyLicznik() {
  const [number, setNumber] = React.useState(0);
  return (
    <>
      <p>{number}</p>
      <Przycisk onPress={() => setNumber(number + 1)}>+++</Przycisk>
    </>
  );
}

export default NowyLicznik;
