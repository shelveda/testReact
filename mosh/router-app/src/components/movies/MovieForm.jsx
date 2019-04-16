import React from 'react';
import Joi from 'joi-browser';
import IlyaForm from './../common/IlyaForm';
import { saveMovie, getMovie } from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService';

class MovieForm extends IlyaForm {
  state = {
    data: {
      title: '',
      genreId: '',
      numberInStock: '',
      dailyRentalRate: ''
    },
    genres: [],
    errors: {}
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label('Title'),
    genreId: Joi.string()
      .required()
      .label('Genre'),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label('Number in Stock'),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label('Rate')
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === 'new') return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace('/not-found');
    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genreId,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }
  doSubmit = () => {
    saveMovie(this.state.data);

    this.props.history.push('/movies');
  };

  render() {
    return (
      <div className="">
        <h4>movieForm</h4>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genreId', 'Genre', this.state.genres)}
          {this.renderInput('numberInStock', 'Number IN Stock', 'number')}
          {this.renderInput('dailyRentalRate', 'Daily Rental Rate')}
          {this.renderButton('save')}
        </form>
      </div>
    );
  }
}

export default MovieForm;
