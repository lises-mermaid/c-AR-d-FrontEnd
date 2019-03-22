import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import store from './store'
import {Root} from './components'


export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <View>
          <Root />
        </View>
      </Provider>
    )
  }
}
