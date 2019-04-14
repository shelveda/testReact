import React, { Component } from 'react';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

import LikeHeart from './common/Like';
import Pagination, { paginate } from './common/Pagination';
import ListTab from './common/LIstTab';

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: [{ _id: '00', name: 'All Genres' }, ...getGenres()],
    pageSize: 5,
    currentPage: 1
  };

  /// for Paging

  initMovies = this.state.movies;

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  /// for ListTab

  handleGenres = genre => {
    const movies =
      genre === 'All Genres'
        ? this.initMovies
        : this.initMovies.filter(m => m.genre.name === genre);

    this.setState({ movies });
  };

  ///Render

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies, genres } = this.state;
    if (count === 0) return <p>there are no movies in database</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>showing {count}movies</p>
        <h2>movies Component</h2>

        <ListTab listItem={genres} onItemChange={this.handleGenres} />

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>like</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <LikeHeart
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
