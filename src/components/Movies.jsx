import React, { Component } from 'react';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

import Pagination, { paginate } from './common/Pagination';
import ListGroup from './common/ListGroup';
import MoviesTable from './MoviesTable';
import _ from 'lodash';
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    const genres = [{ _id: '00', name: 'All Genres' }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genres
    });
  }

  /// for Paging

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

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      selectedGenre,
      currentPage,
      movies: allMovies,
      sortColumn
    } = this.state;
    const filteredMovies =
      selectedGenre && selectedGenre._id !== '00'
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = paginate(sortedMovies, currentPage, pageSize);
    return { totalCount: filteredMovies.length, data: movies };
  };

  ///Render

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, genres, sortColumn } = this.state;

    if (count === 0) return <p>there are no movies in database</p>;

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-3 ">
          <ListGroup
            listItem={genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col-9">
          <p>showing {totalCount.length}movies</p>
          <h2>movies Component</h2>
          <MoviesTable
            sortColumn={sortColumn}
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
