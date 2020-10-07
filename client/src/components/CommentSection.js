import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {comments.map((comment, i) => (
        <div key={i}>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
