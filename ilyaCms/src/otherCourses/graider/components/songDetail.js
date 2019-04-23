import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <h2>select a song</h2>;
  }
  return (
    <React.Fragment>
      <h2>song details</h2>
      <div>{song.title}</div>
      <div>{song.duration}</div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
