import React from 'react';

const LikeHeart = props => {
  let classes = 'fa fa-heart';
  if (!props.liked) {
    classes = 'fal fa-heart';
  }
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
      className={classes}
    />
  );
};

export default LikeHeart;
