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
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          style={styles.textfield}
          onChangeText={email => this.setState({ ...this.state, email })}
        />
        <TextInput
          placeholder="username"
          style={styles.textfield}
          onChangeText={username => this.setState({ ...this.state, username })}
        />
        <TextInput
          placeholder="password"
          style={styles.textfield}
          onChangeText={password => this.setState({ ...this.state, password })}
        />
        <Button onPress={this.handleSubmit} title="Sign Up" />
      </View>
    );
  }
}

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
