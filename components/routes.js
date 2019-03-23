import React from 'react'
import { View } from 'react-native'
import { NativeRouter, Route} from 'react-router-native'
import { Home, SignIn, SignUp, TestScreen, Navbar} from './index'

const Routes = () => (
  <NativeRouter>
    <View>
      <Navbar />
      <View>
        <Route path="/home" component={Home} />
        <Route path="/test" component={TestScreen} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </View>
    </View>
  </NativeRouter>
)

export default Routes
