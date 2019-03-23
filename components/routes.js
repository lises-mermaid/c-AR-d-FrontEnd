import React from 'react'
import { View } from 'react-native'
import { NativeRouter, Route, Switch } from 'react-router-native'
import { Auth, Login, SignUp, Root } from '.'

const Routes = () => (
  <NativeRouter>
    <View>
      <Switch>
        {/* checking if use is logged in */}
        <Route exact path="/" component={Auth} />

        {/* Routes accessible if user is not logged in */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />

        {/* shown if user is logged in */}
        <Route path="/userhome" component={Root} />
      </Switch>
    </View>
  </NativeRouter>
)

export default Routes
