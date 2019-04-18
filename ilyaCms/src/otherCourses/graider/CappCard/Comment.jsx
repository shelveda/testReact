import React from 'react';

const Comment = ({ author, comment, avatar }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="Avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">today</span>
        </div>
        <div className="text">{comment} </div>
      </div>
    </div>
  );
};

export default Comment;
