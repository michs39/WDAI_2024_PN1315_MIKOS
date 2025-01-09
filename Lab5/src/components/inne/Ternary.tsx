function Ternary() {
  const a: boolean = true;
  const b: boolean = false;

  const trueA = "Stwierdzenie a jest prawdziwe";
  const falseA = "Stwierdzenie a jest fałszywe";
  const trueB = "Stwierdzenie b jest prawdziwe";
  const falseB = "Stwierdzenie b jest fałszywe";

  return (
    <>
      <div>{a ? trueA : falseA}</div>
      <div>{b ? trueB : falseB}</div>
    </>
  );
}
export default Ternary;
