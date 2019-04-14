import React from 'react';
import queryString from 'query-string';
import App from './../App';

const Posts = ({ match, location }) => {
  const { sortBy, approved } = queryString.parse(location.search);
  console.log(sortBy, approved);
  return (
    <div>
      <h1>Posts</h1>
      Year:{match.params.year} , Month:{match.params.month}
    </div>
  );
};

export default Posts;
