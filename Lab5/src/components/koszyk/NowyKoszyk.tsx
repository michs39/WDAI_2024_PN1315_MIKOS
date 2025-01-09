import Produkt from "./Produkt.tsx";

function NowyKoszyk() {
  const produkty = ["Pomidor", "Jabłko", "Gruszka", "Ogórek", "Sałata"];
  return (
    <>
      {produkty.map((produkt, index) => (
        <Produkt key={index}>{produkt}</Produkt>
      ))}
    </>
  );
}

export default NowyKoszyk;
