import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../store';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.login({ ...this.state });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={email => this.setState({ ...this.state, email })}
        />
        <TextInput
          placeholder="password"
          onChangeText={password => this.setState({ ...this.state, password })}
        />
        <Button onPress={this.handleSubmit} title="Login" />
      </View>
    );
  }
}

const mapStateToLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  };
};

const mapDispatch = dispatch => ({
  login: localState => dispatch(login(localState)),
});

export default connect(
  mapStateToLogin,
  mapDispatch
)(Login);
