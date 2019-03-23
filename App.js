import React from 'react'
import { Image } from 'react-native'
import { Provider } from 'react-redux'
import { Routes, HomeScreen, TestScreen } from './components'
import store from './store'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Test: { screen: TestScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00BCD4',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
    },
  }
)

const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Home: { screen: HomeScreen },
    Test: { screen: TestScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00BCD4',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },
  }
)

const App = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state

        if (routeName === 'Home') {
          return (
            <Image
            source={
              focused
                ? require('./assets/icons/home-icon.png')
                : require('./assets/icons/home-icon.png')
            }
              style={{
                width: 20,
                height: 20,
              }}
            />
          )
        } else if (routeName === 'Settings') {
          return (
            <Image
              source={
                focused
                  ? require('./assets/icons/settings-icon.png')
                  : require('./assets/icons/settings-icon.png')
              }
              style={{
                width: 20,
                height: 20,
              }}
            />
          )
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#00BCD4',
      inactiveTintColor: 'gray',
    },
  }
)


export default createAppContainer(App)

//  const App = () => (
//   <Provider store={store}>
//     <View style={{ backgroundColor: '#00BCD4', height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight}}>
//       <StatusBar translucent backgroundColor="#00BCD4" barStyle="light-content" />
//     </View>
//     <Routes />
//   </Provider>
// )

// export default App
