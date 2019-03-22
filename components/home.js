import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <View>
          <Link to="/signin">
            <Button
              title="Sign In"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </Link>
          <Link to="/signup">
            <Button
              title="Sign Up"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
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
