import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'

import ActiclePage from '../screens/ArticlePage'
import HomePage from '../screens/HomePage'

export type MainStackParams = {
  Home: undefined
  Acticle: undefined
}

const MainStack = createStackNavigator<MainStackParams>()

export const Main = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName="Home"
  >
    <MainStack.Screen name="Home" component={HomePage} />
    <MainStack.Screen name="Acticle" component={ActiclePage} />
  </MainStack.Navigator>
)
