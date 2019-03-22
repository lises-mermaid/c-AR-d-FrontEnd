import React from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { Home, SignUp } from './index';

const SignIn = props => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default (Routes = () => (
  <NativeRouter>
    <View>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </View>
  </NativeRouter>
));
