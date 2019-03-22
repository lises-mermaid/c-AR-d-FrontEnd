import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'react-router-native';

const Props = {};

const Home = () => <Text>Home</Text>;

const Scan = () => <Text>Scan</Text>;

const Settings = () => <Text>Settings</Text>;

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.nav}>
        <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
          <Image
            source={require('../assets/icons/home-icon.png')}
            style={{ width: 28, height: 28 }}
          />
        </Link>
        <Link to="/scan" underlayColor="#f0f4f7" style={styles.navItem}>
          <Image
            source={require('../assets/icons/scan-icon.png')}
            style={{ width: 28, height: 28 }}
          />
        </Link>
        <Link to="/settings" underlayColor="#f0f4f7" style={styles.navItem}>
          <Image
            source={require('../assets/icons/settings-icon.png')}
            style={{ width: 28, height: 28 }}
          />
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
