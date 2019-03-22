import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'
import { auth } from '../store'

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.props.handleSubmit.bind(this)
    }

    handleSubmit () {
        this.props.signUp({...this.state, method: this.props.name})
    }

    render() {
        <View>
            <TextInput
                placeholder="email"
                onChangeText={(email) => this.setState({ ...this.state, email })}
            />
            <TextInput
                placeholder="password"
                onChangeText={(password) => this.setState({ ...this.state, password })}
            />
            <Button onPress={this.handleSubmit} title={this.props.displayName} />
        </View>
    }
}

const mapStateToSignin = state => {
    return {
        name: 'login',
        displayName: 'Login',
        error: state.user.error
    }
}

const mapStateToSignup = state => {
    return {
        name: 'signup',
        displayName: 'Sign Up',
        error: state.user.error
    }
}

const mapDispatch = dispatch => ({
    signUp: (localState) => dispatch(auth(localState))
})

export const SignUp = connect(mapStateToSignup, mapDispatch)(AuthForm)
