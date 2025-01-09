import { useEffect, useState } from "react";

function Odliczanie() {
  const [count, setCount] = useState(150);
  const [isActive, setIsActive] = useState(false);
  const countingDone = count <= 0;

  useEffect(() => {
    let intervalId: number;
    if (isActive && !countingDone) {
      intervalId = setInterval(() => {
        setCount((c) => c - 1);
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [isActive, countingDone]);

  const toggleCounting = () => setIsActive(!isActive);

  return (
    <div>
      <div>Count: {count / 10}</div>
      <button onClick={toggleCounting} disabled={countingDone}>
        {countingDone ? "Odliczanie zakończone" : isActive ? "Stop" : "Start"}
      </button>
    </div>
  );
}
export default Odliczanie;
