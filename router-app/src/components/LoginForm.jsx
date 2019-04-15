import React from 'react';
import Joi from 'joi-browser';
import IlyaForm from './common/IlyaForm';

class LoginForm extends IlyaForm {
  state = {
    data: { username: '', password: '' },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = () => {
    //call server
    console.log('subbeed');
  };

  render() {
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
