import React from "react";

interface Props {
  props: Comment;
}

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

function Komentarz({ props }: Props) {
  const [likes, setlikes] = React.useState(props.likes);
  const [liked, setLike] = React.useState(false);
  const [disliked, setDislike] = React.useState(false);

  return (
    <>
      <div style={{ backgroundColor: "cornflowerblue" }}>
        <br />
        <div>{props.user.username + " : " + props.user.fullName}</div>

        <div>{props.body}</div>

        <div>
          {likes}
          <button
            style={{ backgroundColor: "green", borderColor: "darkgreen" }}
            onClick={() => {
              if (liked) {
                setLike(false);
                setlikes(likes - 1);
              } else if (disliked) {
                setDislike(false);
                setlikes(likes + 2);
                setLike(true);
              } else {
                setlikes(likes + 1);
                setLike(true);
              }
            }}
          >
            Like
          </button>
          <button
            style={{ backgroundColor: "red", borderColor: "darkred" }}
            onClick={() => {
              if (disliked) {
                setDislike(false);
                setlikes(likes + 1);
              } else if (liked) {
                setLike(false);
                setlikes(likes - 2);
                setDislike(true);
              } else {
                setlikes(likes - 1);
                setDislike(true);
              }
            }}
          >
            Dislike
          </button>
        </div>
        <br />
      </div>
      <br />
    </>
  );
}

export default Komentarz;
