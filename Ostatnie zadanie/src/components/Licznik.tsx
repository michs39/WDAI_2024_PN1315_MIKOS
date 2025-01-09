import React, {useEffect} from "react";

function Licznik() {

    const [clicks, setNumber] = React.useState(0);
    useEffect(()=>{setNumber(Number(localStorage.getItem("numberOfClicks")))},[])
    return (
        <>
            <p>{clicks}</p>
            <button onClick={() => {
                setNumber(clicks + 1); localStorage.setItem("numberOfClicks", (clicks+1).toString());
            }}>+</button>
        </>
    );
}

export default Licznik;