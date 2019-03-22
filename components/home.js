import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router-native';
import { Navbar } from './navbar';

class Home extends Component {
  render() {
    if (this.props.user.id) {
      return (
        <View>
          <Navbar />
        </View>
      );
    } else {
      return (
        <View style={styles.buttons}>
          <Link to="/signin">
            <Button
              title="Sign In"
              color="#841584"
              onPress={() => this.props.history.push('/signin')}
            />
          </Link>
          <Link to="/signup">
            <Button
              title="Sign Up"
              color="#841584"
              onPress={() => this.props.history.push('/signup')}
            />
          </Link>
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  buttons: {
    top: 50,
  },
});
