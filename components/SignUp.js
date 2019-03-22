import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { signup } from '../store';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.signUp({ ...this.state });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={email => this.setState({ ...this.state, email })}
        />
        <TextInput
          placeholder="username"
          onChangeText={username => this.setState({ ...this.state, username })}
        />
        <TextInput
          placeholder="password"
          onChangeText={password => this.setState({ ...this.state, password })}
        />
        <Button onPress={this.handleSubmit} title="Sign Up" />
      </View>
    );
  }
}

const mapStateToSignin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  };
};

const mapStateToSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
  };
};

const mapDispatch = dispatch => ({
  signUp: localState => dispatch(signup(localState)),
});

export default connect(
  mapStateToSignup,
  mapDispatch
)(SignUp);
