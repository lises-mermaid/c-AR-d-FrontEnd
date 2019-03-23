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
    this.props.login(this.state.email, this.state.password, this.props.history);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          style={styles.textfield}
          onChangeText={email => this.setState({ ...this.state, email })}
        />
        <TextInput
          placeholder="password"
          style={styles.textfield}
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
  login: (email, password, history) => dispatch(login(email, password, history)),
});

export default connect(
  mapStateToLogin,
  mapDispatch
)(Login);

const styles = {
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 250
  },
  textfield: {
    height: 40,
    width: 180,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
};
