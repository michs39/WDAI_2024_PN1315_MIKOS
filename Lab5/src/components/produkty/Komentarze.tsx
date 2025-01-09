import Komentarz from "./Komentarz.tsx";
import React, { useEffect } from "react";

interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}
interface User {
  id: number;
  username: string;
  fullName: string;
}

function Komentarze() {
  const [komentarze, setkomentarze] = React.useState();
  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then(setkomentarze);
  }, []);
  if (komentarze) {
    console.log(komentarze.comments[0]);
    return komentarze.comments.map((comment: Comment, index: number) => (
      <Komentarz key={index} props={comment} />
    ));
    //<Komentarz props={komentarze.comments[0]} />
  } else return <h2>Loading...</h2>;
}
export default Komentarze;
