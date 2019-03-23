import React from 'react'
import { Image } from 'react-native'
import { Home, Test } from '.'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: Home },
    // Test: { screen: Test },
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
    Home: { screen: Home },
    // Test: { screen: Test },
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

const Root = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state

        if (routeName === 'Home') {
          return (
            <Image
            source={
              focused
                ? require('../assets/icons/home-icon.png')
                : require('../assets/icons/home-icon.png')
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
                  ? require('../assets/icons/settings-icon.png')
                  : require('../assets/icons/settings-icon.png')
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

export default createAppContainer(Root)

// export default Root = () => (
//   <View>
//     <Text>Hello!!</Text>
//   </View>
// )
