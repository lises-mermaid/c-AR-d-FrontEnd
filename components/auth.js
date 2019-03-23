import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Root } from '.'

class Auth extends Component {
  render() {
    return (
      <View >
        {
          this.props.user.id ?
          <View style={styles.container}>
            <Root />
              {/* <Text style={{ marginTop: 250 }}>Welcome {this.props.user.username}</Text> */}
          </View>
          :
          <View style={styles.container}>
            <Button
              style={styles.button}
              title="Login"
              color="#841584"
              onPress={() => this.props.history.push('/login')}
            />
            <Button
              style={styles.button}
              title="Sign Up"
              color="#841584"
              onPress={() => this.props.history.push('/signup')}
            />
            <Button
              style={styles.button}
              title="Scan a card as Guest"
              color="#841584"
              onPress={() => this.props.history.push('/signup')}
            />
          </View>
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(Auth)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 250
  },
  button: {
    top: 50,
  },
})
