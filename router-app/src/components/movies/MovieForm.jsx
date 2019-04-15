import React from 'react';

const MovieForm = ({ match, history }) => {
  return (
    <div className="">
      <h4>movieForm{match.params.id}</h4>
      <button
        className="btn btn-primary"
        onClick={() => history.push('/movies')}
      >
        save
      </button>
    </div>
  );
};

export default MovieForm;
