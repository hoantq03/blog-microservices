import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    if (comment.status === "pending") {
      comment.content = "this comment is waiting for moderation";
    }
    if (comment.status === "rejected") {
      comment.content = "This comment was rejected for some reason";
    }
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
