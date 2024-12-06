// src/components/Post.js
import React from 'react';

const Post = ({ text, sentiment }) => {
  return (
    <div className="post">
      <p>{text}</p>
      <p>Sentiment: {sentiment}</p>
    </div>
  );
};

export default Post;
