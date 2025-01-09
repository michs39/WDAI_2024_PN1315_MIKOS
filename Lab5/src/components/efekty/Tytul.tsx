import React, { useEffect } from "react";

function Tytul() {
  const [title, setTitle] = React.useState<string>("");
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <input value={title} onChange={(e) => setTitle(e.target.value)} />;
}

export default Tytul;
