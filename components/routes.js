import React from 'react'
import { View } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import { Home, SignIn, SignUp } from './index'

export default Routes = () => (
  <NativeRouter>
    <View>
      <View>
        <Route path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </View>
      <Home />
    </View>
  </NativeRouter>
)
