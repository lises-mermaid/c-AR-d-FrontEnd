import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { Home, SignUp, Login } from './index';

export default (Routes = () => (
  <NativeRouter>
    <View>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </View>
  </NativeRouter>
));
