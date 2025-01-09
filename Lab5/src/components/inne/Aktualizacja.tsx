import { useState } from "react";

function Aktualizacja() {
  const [produkt, setProdukt] = useState({ name: "Pomidor", price: 50 });
  const updateState = () => {
    setProdukt((prevState) => ({ ...prevState, price: 100 }));
  };

  return (
    <>
      <div>{produkt.name + " " + produkt.price}</div>
      <button onClick={() => updateState()}>Zmiana</button>
    </>
  );
}
export default Aktualizacja;
