import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.component.utils';

class SignIn extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
     }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch(error){
      console.log(error);
    }

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({[name]: value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I alredy have an accounte</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            label='email'
            required/>
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='password'
            required/>
          <div className='buttons'>
            <CustomButton type='submit'>Sign</CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
              {''}
              Sign With Google
              {''}
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
