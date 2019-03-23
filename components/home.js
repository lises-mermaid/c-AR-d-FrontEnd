import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router-native';
import { Navbar } from './navbar';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.user.id ?
            <View>
              <Text>Welcome {this.props.user.username}</Text>
              {/* <Navbar />   */}
            </View>
          :
          <View style={styles.buttons}>
          <Link to="/login">
            <Button
              title="Login"
              color="#841584"
              onPress={() => this.props.history.push('/login')}
            />
          </Link>
          <Link to="/signup">
            <Button
              title="Sign Up"
              color="#841584"
              onPress={() => this.props.history.push('/signup')}
            />
          </Link>
          <Link to="/signup">
            <Button
              title="Scan a card as Guest"
              color="#841584"
              onPress={() => this.props.history.push('/signup')}
            />
          </Link>
        </View>
        }
      </View>
    )
    }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 250
  },
  buttons: {
    top: 50,
  },
});
