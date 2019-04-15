import React from 'react';
import Joi from 'joi-browser';
import IlyaForm from '../common/IlyaForm';

class MovieFormAdd extends IlyaForm {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
      .min(5),
    name: Joi.string()
      .required()
      .label('Name')
  };

  doSubmit = () => {
    //call server
    console.log('submitted');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default MovieFormAdd;
