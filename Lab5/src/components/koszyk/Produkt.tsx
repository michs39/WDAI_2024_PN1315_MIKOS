interface Props {
  children: string;
}

function Produkt(props: Props) {
  return (
    <>
      <p>{props.children}</p>
    </>
  );
}

export default Produkt;
