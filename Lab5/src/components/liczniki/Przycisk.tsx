interface Props {
  children: string;
  onPress: () => void;
}

function Przycisk(props: Props) {
  return <button onClick={props.onPress}>{props.children}</button>;
}

export default Przycisk;
